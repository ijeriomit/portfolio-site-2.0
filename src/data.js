export const store = {
  personalDesc: `Hello! I'm Ijeri Omitogun, a Software Engineer with a strong focus on creating user-friendly and visually engaging web applications. My journey started with a love for video games, which led me to discover my passion for web development. <br/> Over the years, I've worked on innovative projects at Nauticus Robotics and Google, honing my skills in designing intuitive user experiences and ensuring application performance and accessibility. <br/>
  While I specialize in frontend development, I'm always eager to explore new challenges in software engineering. If you're looking for someone to bring your vision to life, let's connect and create something extraordinary together.`,
  experiences: [
    {
      companyName: "Data Annotation",
      startDate: "April 2024",
      endDate: "Present",
      jobTitle: "AI Trainer (Contract)",
      logoPath: "data-annotations-logo.jpg",
      companyUrl: "https://www.dataannotation.tech/",
      description:
        "I trained AI chatbots to enhance their coding capabilities and ensure high-quality code generation. I evaluated various coding problems to measure the AI’s progress and performance. I authored clear code snippets and explanations, and validated AI-generated code and images to meet project standards. My work involved ensuring correctness, performance, and alignment with project requirements.",
    },
    {
      companyName: "Google LLC",
      startDate: "November 2021",
      endDate: "March 2024",
      jobTitle: "Software Engineer",
      logoPath: "google-logo.png",
      companyUrl: "https://about.google/",
      description:
        "I developed front-end components with Angular, TypeScript, and Java, ensuring web accessibility compliance, and played a key role in designing and implementing Google's $5 billion Buying Hub. I led product epics, collaborated with cross-functional teams, and contributed to sub-projects like Supplier Nexus and Contracting Hub. I also trained contractors, mentored colleagues, and earned certifications in TypeScript, Angular, and Web Accessibility.",
    },
    {
      companyName: "Nauticus Robotics",
      startDate: "May 2019",
      endDate: "June 2021",
      jobTitle: "Software Engineer",
      logoPath: "nauticus-robotics-logo.jpeg",
      companyUrl: "https://nauticusrobotics.com/",
      description:
        "I developed front-end components with JavaScript and Vue.js for robotic control interfaces and contributed to UX design and automation for products like the Olympic Arm and Aquanaut. I assisted in offshore software deployments, conducted customer demos, and worked on the HaloGuard safety system to improve safety. I implemented an Automated User Testing Suite with Selenium in Git CI pipelines and maintained Python and Vue code repositories.",
    },
  ],
  programmingLanguages: [
    "Javascript",
    "Typescript",
    "Python",
    "Angular",
    "Vue",
    "HTML5",
    "CSS",
    "Node",
    "C#",
    "ROS",
  ],
  devTools: [
    "VS Code",
    "Jasmine",
    "Mocha/Chai",
    "Node",
    "Selenium",
    "Visual Studio",
    "Intellij",
    "Docker",
    "Unity3D",
    "Git",
    "Gitlab CI",
    "Linux",
    "MacOS",
    "Windows",
  ],
  endorsements: [
    {
      name: "Mayuri Raja",
      title: "Software Engineer at Google",
      imageSrc: require("@/assets/about-me-images/mayuri-profile-pic.jpeg"),
      text: "Ijeri is hardworking and driven to solve even the toughest of problems. His curiosity and love of programming show in the quality and depth of his work.",
    },
    {
      name: "Blake DeBenon",
      title: "Senior Engineer at Google",
      imageSrc: require("@/assets/about-me-images/blake-profile-pic.jpeg"),
      text: "I worked with Ijeri at Google on an ambitious project that led to billions in savings for Google. Ijeri made an enormous impact in helping the project succeed by working locking down and implementing requirements. Ijeri was an effective and reliable teammate. I would absolutely want to work with him again!",
    },
    {
      name: "Jide Akinyode",
      title: "VP of Engineering at Nauticus Robotics",
      imageSrc: require("@/assets/about-me-images/jide-profile-pic.jpeg"),
      text: "Ijeri worked closely under me. He grew from a rookie intern to a full fledged engineer. He was a crucial part of launching several Nauticus Robotics products: Haloguard, Olympic Arm, and Aquanaut. He went above and beyond for the company. Any team would be lucky to have him",
    },
    {
      name: "Thanh Truong",
      title: "Software Engineer at Google",
      imageSrc: require("@/assets/about-me-images/thanh-profile-pic.jpeg"),
      text: "Having worked closely with him for over two years, I’ve seen firsthand his technical expertise and positive attitude, particularly in leading and delivering key UI features for our internal procurement platform. Ijeri is always dependable, eager to learn, and actively contributes to improving our coding standards and team practices.",
    },
    {
      name: "Person 5",
      title: "Engineer at Company",
      imageSrc: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec arcu mauris. Cras congue eu magna ut efficitur. Donec nec elit a massa cursus consectetur.",
    },
  ],
  productTeams: [
    {
      title: "Buying Hub",
      companyName: "Google",
      description:
        "Google finance platform used to manage spend, submit purchase orders, make contracts, and find appropriate suppliers.",
      media: [
        require("@/assets/project-images/buying_hub_logo.png"),
        require("@/assets/project-images/buying_hub_nav.png"),
      ],
      coverImg: require("@/assets/project-images/buying_hub_logo.png"),
      techStack: ["Angular", "Typescript", "Mocha/Chai"],
    },
    {
      title: "Olympic Arm",
      companyName: "Nauticus Robotics",
      description:
        "The Olympic Arm is a versatile subsea tool that’s powerful and easy to use right from the start. It matches the strength of work-class hydraulic manipulators but offers better maneuverability, running entirely on electricity. With features like Absolute Position Sensing, Direct Cartesian Control, and Subsea Tool Changing, it takes control and precision to the next level.",
      media: [
        require("@/assets/project-images/olympic-arm.jpg"),
        require("@/assets/project-images/olympic-arm.mp4"),
        require("@/assets/project-images/mock-oly-arm.mp4"),
        require("@/assets/project-images/oly-arm-tool.mp4"),
      ],
      coverImg: require("@/assets/project-images/olympic-arm.jpg"),
      productUrl: "https://nauticusrobotics.com/olympic-arm/",
      techStack: ["Vue.js", "ROS", "Python", "Docker"],
    },
    {
      title: "Supplier Nexus",
      companyName: "Google",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec arcu mauris. Cras congue eu magna ut efficitur. Donec nec elit a massa cursus consectetur. Nam maximus consequat metus eu malesuada. Pellentesque aliquet, lectus id maximus laoreet, nulla libero fermentum risus, varius iaculis arcu turpis in nisl. Curabitur accumsan a ligula vitae ullamcorper. Nulla eget ultrices sapien, at auctor dui. Aenean sollicitudin, metus sed.",
      media: [
        require("@/assets/project-images/find-a-supplier.png"),
        require("@/assets/project-images/supplier-nexus-art.png"),
        require("@/assets/project-images/supplier-nexus-nav.png"),
      ],
      coverImg: require("@/assets/project-images/find-a-supplier.png"),
      techStack: ["Angular", "Typescript", "Mocha/Chai"],
    },
    {
      title: "Haloguard",
      companyName: "Nauticus Robotics & TransOcean",
      description:
        "Web app for a personnel monitoring safety system, integrating with multiple TOF cameras. Scales and trims di erent dimensions of image data and compiles them into video.",
      media: [require("@/assets/project-images/haloguard.png")],
      coverImg: require("@/assets/project-images/haloguard.png"),
      productUrl:
        "https://www.rigzone.com/news/wire/transocean_deploys_drill_floor_safety_tech-12-feb-2021-164599-article/",
      techStack: ["Vue", "Javascript", "ROS", "Python"],
    },
    {
      title: "toolKITT",
      companyName: "Nauticus Robotics",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec arcu mauris. Cras congue eu magna ut efficitur. Donec nec elit a massa cursus consectetur. Nam maximus consequat metus eu malesuada. Pellentesque aliquet, lectus id maximus laoreet, nulla libero fermentum risus, varius iaculis arcu turpis in nisl. Curabitur accumsan a ligula vitae ullamcorper. Nulla eget ultrices sapien, at auctor dui. Aenean sollicitudin, metus sed.",
      media: [require("@/assets/project-images/aquanaut-commander.webp")],
      coverImg: require("@/assets/project-images/aquanaut-commander.webp"),
      productUrl: "https://nauticusrobotics.com/toolkitt/",
      techStack: ["ROS", "Python"],
    },
  ],
  projects: [
    {
      projectName: "LeetCode Practice",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      media: [require("@/assets/project-images/leetcode.png")],
      githubUrl: "https://github.com/ijeriomit/leetcode-practice",
      skills: ["Javascript"],
    },
    {
      projectName: "ROS Video Recorder",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      media: [require("@/assets/project-images/ROS.png")],
      githubUrl: "https://github.com/ijeriomit/ROS-Video-Recorder",
      skills: ["ROS", "Python", "OpenCV"],
    },
    {
      projectName: "Python Experiments",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      media: [require("@/assets/project-images/python.jpeg")],
      githubUrl: "https://github.com/ijeriomit/Python",
      skills: ["Python"],
    },
    {
      projectName: "SEP-Agent Creation",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      media: [require("@/assets/project-images/leetcode.png")],
      githubUrl: "https://github.com/ijeriomit/SEP-Agent-Creation",
      skills: ["React", "Sindarin", "LLM"],
    },
    {
      projectName: "LAB",
      text: "Lab is a 3D chemistry Lab simulator designed with the intent to allow students to conduct chemistry experiments in a safe and controlled environment. Lab would be beneficial for public schools without funding for a chemistry Lab and would allow users to learn without any risks. Lab was built using C# and Unity 3D.",
      media: [require("@/assets/project-images/LAB.png")],
      githubUrl: "https://github.com/ijeriomit/LAB",
      skills: ["C#", "Unity 3D"],
    },
    {
      projectName: "Epoch",
      text: "Epoch is a thrilling 2D side-scrolling RPG built in Unity that immerses players in a world of magic, monsters, and adventure. Players can fully customize their character’s equipment and abilities, ranging from projectiles and swords to powerful magic spells. Each level introduces unique enemies and obstacles, and players can gather coins to upgrade their skills after every stage. With three challenging levels, Epoch offers a dynamic gaming experience, combining fast-paced combat and strategic skill-building. Developed using C#, it's designed to captivate RPG lovers with endless possibilities for power and progression",
      media: [
        require("@/assets/project-images/player-jumping.png"),
        require("@/assets/project-images/epoch-short.mp4"),
      ],
      githubUrl: "https://github.com/ijeriomit/Epoch",
      skills: ["C#", "Unity 3D"],
    },
    {
      projectName: "Personal Portfolio",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      media: [
        require("@/assets/project-images/portfolio.png"),
        require("@/assets/project-images/portfolio-2.png"),
      ],
      githubUrl: "https://github.com/ijeriomit/portfolio-site-2.0",
      skills: ["Vue.js", "SCSS"],
    },
  ],
};
