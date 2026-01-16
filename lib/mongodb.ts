import mongoose from 'mongoose';

// Define the type for our cached connection
type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

// Extend the global object to include our mongoose cache
declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
}

// MongoDB connection string from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

// Validate that the connection string exists
if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

/**
 * Global cache to maintain a single MongoDB connection across hot reloads in development.
 * In production, this prevents multiple connections during serverless function invocations.
 */
let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

/**
 * Establishes and returns a cached MongoDB connection using Mongoose.
 * 
 * Benefits:
 * - Prevents exhausting database connection limits
 * - Improves performance by reusing existing connections
 * - Handles Next.js hot-reloading in development gracefully
 * 
 * @returns {Promise<typeof mongoose>} The Mongoose instance with an active connection
 */
async function connectDB(): Promise<typeof mongoose> {
  // Return existing connection if available
  if (cached.conn) {
    return cached.conn;
  }

  // If no connection exists but a connection promise is in progress, await it
  if (!cached.promise) {
    const options = {
      bufferCommands: false, // Disable Mongoose buffering to avoid issues with serverless
    };

    // Create a new connection promise
    cached.promise = mongoose.connect(MONGODB_URI as string, options).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    // Await the connection promise and cache the result
    cached.conn = await cached.promise;
  } catch (error) {
    // Reset the promise on error to allow retry on next invocation
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}

export default connectDB;
