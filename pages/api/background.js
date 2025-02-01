const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "Galgotias University",
        degree: "B.Tech in Computer Science and Engineering",
        grade: "8.4 CGPA",
        detail:
          "Pursuing a Bachelor's degree in Computer Science and Engineering at Galgotias University, focusing on software development, data structures, algorithms, and modern web technologies.",
        year: "Aug 2022 - Sept 2026",
      },
      {
        id: 1,
        title: "New Lancer Convent School",
        degree: "12th Board ",
        grade: "92%",
        detail:
          "Completed senior secondary education with a focus on Physics, Chemistry, and Mathematics",
        year: "Feb 2020 - Mar 2022",
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "DevTown",
        role: "Software Developer",
        url: "https://www.devtown.in/",
        desc: "• Developed and integrated APIs to enable seamless frontend-backend communication while implementing secure user authentication mechanisms.\n• Led a cost-saving initiative by identifying unused AWS resources and establishing S3 bucket expiration policies, leading to an annual cost reduction exceeding $50,000 in AWS expenditures.\n• Utilized AWS (EC2, S3), ReactJS, TypeScript, PostgreSQL, NeonDB, Migrations, and secure authentication techniques to optimize system performance and scalability, improving operational efficiency by 40%.",
        year: "Oct 2024 - Present",
        location: "Maharashtra, India",
      },

      {
        id: 2,
        title: "Xipper",
        role: "Full Stack Developer",
        url: "https://xipper.in/",
        desc: `• Designed and integrated RESTful APIs, reducing system overload and enhancing communication between frontend and backend systems by 30%, ensuring robust and scalable interactions.\n
    • Designed scalable real-time communication features using WebSocket, ensuring smooth and reliable user experiences in live chat applications, reducing latency issues by 35%.\n
    • ReactJS, TypeScript, Lambda, Firebase, OTPLess, MongoDB, React Native, Tailwind CSS, Shadcn.`,
        year: "Aug 2024 - Oct 2024",
        location: "Bangalore, India",
      },

      {
        id: 3,
        title: "EliteKods",
        role: "Software Developer",
        url: "https://elitekods.com/",
        desc: `• Optimized payment gateway integration, resulting in a 25% reduction in transaction failures and improved user trust.\n
    • Developed and integrated mobile applications, ensuring seamless functionality, intuitive interfaces, and smooth performance across devices, reducing user complaints by 60%.\n
    • JavaScript, React Native, NextJS, Redux, AWS, S3, Docker, Material-UI, Payment Gateway, WebSocket.`,
        year: "Jan 2024 - Aug 2024",
        location: "Pune, India",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
