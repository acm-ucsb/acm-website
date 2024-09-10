export type ACMEvent = {
    name: string;
    tagline: string;
    description: string;
    datetime: string;
    location: string;

}

// This is to be updated until we have a backend to pull this data from
const events: ACMEvent[] = [
    {
        name: "Git Bash",
        tagline: "POV: CS majors learn how to socialize!",
        description: "Join us for a fun, interactive workshop on mastering Git and Bash commands. Perfect for beginners and those looking to refine their skills.",
        datetime: "2024-09-15T18:00:00",
        location: "Room 101, Engineering Building",
    },
    {
        name: "Hackathon",
        tagline: "Code, Collaborate, Conquer!",
        description: "Join us for a 24-hour hackathon where you can build innovative projects, meet new people, and win exciting prizes!",
        datetime: "2024-09-25T09:00:00",
        location: "University Hall, UCSB",
    },
    {
        name: "Interview Prep",
        tagline: "Ace Your Next Interview!",
        description: "Get ready for technical interviews with our mock interview sessions and tips from industry professionals.",
        datetime: "2024-09-18T14:00:00",
        location: "Room 203, Career Center",
    },
    {
        name: "Web Dev Workshop",
        tagline: "Build Your First Website!",
        description: "A beginner-friendly workshop where you'll learn how to create a website from scratch using HTML, CSS, and JavaScript.",
        datetime: "2024-09-22T11:00:00",
        location: "Room 305, Computer Science Building",
    },
    {
        name: "Research Workshop",
        tagline: "Dive into Research!",
        description: "Learn the basics of academic research, including how to find papers, write proposals, and present your findings.",
        datetime: "2024-09-20T16:30:00",
        location: "Library Conference Room B",
    },
    {
        name: "ICPC Practice",
        tagline: "Prepare for the Ultimate Coding Challenge!",
        description: "Train for the International Collegiate Programming Contest with practice problems and live coding sessions.",
        datetime: "2024-09-28T10:00:00",
        location: "Room 104, Math Building",
    },
    {
        name: "Tech Talk: Future of AI",
        tagline: "AI: The Future is Now!",
        description: "Join us for an engaging talk on the latest advancements in Artificial Intelligence and what the future holds for AI technology.",
        datetime: "2024-10-02T18:30:00",
        location: "Auditorium A, Science Hall",
    },
    {
        name: "Team Building Event",
        tagline: "Connect and Collaborate!",
        description: "Participate in fun activities and games designed to build teamwork and foster connections among members.",
        datetime: "2024-09-29T13:00:00",
        location: "UCSB Recreation Center",
    },
    {
        name: "Data Science Bootcamp",
        tagline: "Uncover the Power of Data!",
        description: "A comprehensive bootcamp covering the basics of data science, from data collection and cleaning to analysis and visualization.",
        datetime: "2024-10-05T09:30:00",
        location: "Room 401, Science & Engineering Library",
    },
    {
        name: "Networking Night",
        tagline: "Meet Industry Professionals!",
        description: "A networking event where you can connect with industry professionals, alumni, and recruiters from top tech companies.",
        datetime: "2024-10-08T19:00:00",
        location: "University Center, UCSB",
    },
];

export default events;