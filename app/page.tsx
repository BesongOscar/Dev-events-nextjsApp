import Explorebtn from "@/components/explorebtn";
import { title } from "process";
import React from "react";
import EventCard from "@/components/eventCard";
import { events } from "@/lib/constants";

export default function page() {
  return (
    <main>
      <section>
        <h1 className="text-center">
          Hub for Every Dev <br /> Event you can't miss
        </h1>
        <p className="text-center mt-5">
          Hackathons, Conferences, and Meetups, All in One!
        </p>

        <Explorebtn />

        <div className="mt-20 space-y-7">
          <h3>Featured Events</h3>
          <ul className="events">
            {events.map((event) => (
              <li key={event.title}>
                <EventCard {...event}/>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
