export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  imgset: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Scrap Yard Smash",
    [span_0](start_span)description: "Designed and implemented a 3D simulation environment with realistic physics, enabling fully destructible objects and optimized memory management via object pooling[span_0](end_span).",
    image: "/imgs/scrap-yard.png",
    imgset: ["/imgs/scrap-1.png", "/imgs/scrap-2.png"],
    tags: ["Unity", "C#", "3D Physics", "Game Design"],
    links: {
      github: "https://github.com/kaeruishere/", // Buraya kendi linklerini ekleyebilirsin kanka
      live: "",
    },
  },
  {
    id: 2,
    title: "Medicine Tracker App",
    [span_1](start_span)description: "Developed a cross-platform healthcare application featuring local push notifications and offline alarm services for medication scheduling[span_1](end_span).",
    image: "/imgs/medicine.png",
    imgset: ["/imgs/med-1.png", "/imgs/med-2.png"],
    tags: ["Flutter", "Firebase", "Cross-platform", "Mobile"],
    links: {
      github: "https://github.com/kaeruishere/",
      live: "",
    },
  },
  {
    id: 3,
    title: "Randevusu.Online",
    [span_2](start_span)description: "Built a responsive reservation system with real-time data synchronization using Firebase to prevent booking conflicts[span_2](end_span).",
    image: "/imgs/randevusu.png",
    imgset: ["/imgs/rand-1.png", "/imgs/rand-2.png"],
    tags: ["PHP", "Firebase", "Web Development", "Real-time"],
    links: {
      github: "https://github.com/kaeruishere/",
      live: "http://errenn.xyz", // Domain senin kanka, buraya yönlendirebiliriz
    },
  },
  {
    id: 4,
    title: "Telegram Bot & Self-Hosting Lab",
    description: "Engineered a Python-based Telegram automation bot hosted on a personal Asus server using Coolify, Docker, and Linux Mint (XFCE).",
    image: "/imgs/selfhost.png",
    imgset: ["/imgs/bot-1.png", "/imgs/coolify.png"],
    tags: ["Python", "Coolify", "Docker", "Linux", "DevOps"],
    links: {
      github: "https://github.com/kaeruishere/",
      live: "",
    },
  },
  {
    id: 5,
    title: "Shut The Box Backend",
    [span_3](start_span)description: "Engineered a robust RESTful API using Flask to handle multiplayer game logic and managed relational MySQL database schemas[span_3](end_span).",
    image: "/imgs/shutthebox.png",
    imgset: ["/imgs/stb-1.png"],
    tags: ["Flask", "MySQL", "API Design", "Python"],
    links: {
      github: "https://github.com/kaeruishere/",
      live: "",
    },
  },
];
