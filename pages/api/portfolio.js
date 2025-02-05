const portfolio = [
  {
    id: 0,
    projectName: "YOOM – Video Conferencing WebApp",
    url: "https://jmmerp.com/",
    image: "projects/Yoom.png",
    projectDetail:
      "A web application which will enhance user attraction, user one to one streaming, with recorded live stream and many more. Designed a user-friendly UI. Optimized video and audio quality, reducing latency and enhancing user experience during calls. With a feature of live streaming, live recording & watch later and create personal room.",
    technologiesUsed: [
      {
        tech: "NextJS",
      },
      {
        tech: "TypeScript",
      },
      {
        tech: "GetStream",
      },
      {
        tech: "Clerk",
      },
      {
        tech: "TailwindCSS",
      },
    ],
  },
  {
    id: 1,
    projectName: "Astra – AI Website Builder",
    url: "https://astra-agency.vercel.app/",
    image: "projects/Astra.png",
    projectDetail:
      "Astra is a modern, fully responsive website built with a powerful tech stack and use Clerk for secure authentication and Integrated AI-powered content generation tools. You can start with basic free plan to explore the services. Build stunning Websites with Astra's intuitive drag-and-drop builder and powerful AI assistant",
    technologiesUsed: [
      {
        tech: "NextJS",
      },
      {
        tech: "TypeScript",
      },
      {
        tech: "TailwindCSS",
      },
      {
        tech: "Shadcn",
      },
      {
        tech: "Clerk",
      },
      {
        tech: "Framer Motion",
      },
    ],
  },
  {
    id: 2,
    projectName: "JMM Technologies",
    url: "https://jmm.ltd/",
    image: "projects/jmmTech.png",
    projectDetail:
      "JMM Technologies is a start-up turned technology company with extensive years of experience delivering digital solutions. As a fast-growing tech firm, we help diverse businesses and organizations. Our expertise in innovative, state-of-the-art digital services accelerates business growth and enhances customer impact.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: ".net",
      },
      {
        tech: "REST API's",
      },
      {
        tech: "Ant Design",
      },
      {
        tech: "TailwindCSS",
      },
    ],
  },
];
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
