export type EventItem = {
    image: string;
    title: string;
    slug: string;   
    location: string;
    date: string;
    time: string;
}

export const events: EventItem[] = [
    {
        image: "/images/event1.png",
        title: "React Summit 2024",
        slug: 'react-summit-2024',
        location: 'Amsterdam, Netherlands',
        date: '2024-09-15',
        time: '09:00 AM',
    },
    {
        image: "/images/event2.png",
        title: "JSConf EU 2024",    
        slug: 'jsconf-eu-2024',
        location: 'Berlin, Germany',
        date: '2024-10-20',
        time: '10:00 AM',
    },
    {
        image: "/images/event3.png",
        title: "Node.js Interactive 2024",  
        slug: 'nodejs-interactive-2024',
        location: 'San Francisco, USA',
        date: '2024-11-05',
        time: '08:30 AM',
    },
    {
        image: "/images/event4.png",
        title: "Frontend Masters Conference 2024",
        slug: 'frontend-masters-conference-2024',
        location: 'New York, USA',
        date: '2024-12-10',
        time: '09:30 AM',
    },
    {
        image: "/images/event5.png",
        title: "Full Stack Fest 2024",
        slug: 'full-stack-fest-2024',
        location: 'Barcelona, Spain',
        date: '2024-09-25',
        time: '10:00 AM',
    },
    {
        image: "/images/event6.png",
        title: "DevOps Days 2024",
        slug: 'devops-days-2024',
        location: 'London, UK',
        date: '2024-10-10',
        time: '09:00 AM',
    }
];