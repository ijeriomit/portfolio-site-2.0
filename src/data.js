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
      text: "Having worked closely with him for over two years, I’ve seen his technical expertise and positive attitude, particularly in leading and delivering UI features for our internal procurement platform. Ijeri is dependable, eager to learn, and actively contributes to improving our coding standards and team practices.",
    },
    {
      name: "John John",
      title: "Staff Engineer Manager at Google",
      imageSrc: require("@/assets/about-me-images/john-profile-pic.jpeg"),
      text: "Ijeri was on my team at Google, where we built a centralized procurement platform. I appreciated his work ethic, positive attitude, and eagerness to learn. He collaborated well with other engineers and worked independently to fix bugs and clarify requirements with the business. His contributions helped us meet key milestones and launch on time. He would be an asset to any team.",
    },
  ],
  productTeams: [
    {
      title: "Buying Hub",
      companyName: "Google",
      description:
        "Buying Hub is Google's procurement platform that centralizes purchasing, contract management, risk assessment, and supplier information, saving the company approximately $5 billion. As a front-end developer, I worked on web pages, forms, and search functionality, and earned Google certifications in Web Accessibility, TypeScript, and Angular. <br/> I contributed to the launch of versions A through C, creating unit tests, designing features, and delegating tasks to other engineers. This role involved close collaboration with Business Management, UI/UX, and Backend Engineering teams to ensure seamless product functionality and integration.",
      media: [require("@/assets/project-images/supplier-nexus-art.png")],
      coverImg: require("@/assets/project-images/supplier-nexus-art.png"),
      coverImgPos: "center",
      techStack: ["Angular", "Typescript", "Mocha/Chai", "API's"],
    },
    {
      title: "Olympic Arm",
      companyName: "Nauticus Robotics",
      description:
        "Olympic Arm is a seven degree of freedom electronic manipulator. It's capable of performing complex operations like Absolute Position Sensing, Direct Cartesian Control, and Subsea Tool Changing in the subsea. On the Olympic Arm Team I developed the tool changing automation. Intergrating with visual sensors to determine the position of objects and calculating the path needed to reach the tool.",

      media: [
        require("@/assets/project-images/oly-arm.gif"),
        require("@/assets/project-images/olympic-arm.mp4"),
        require("@/assets/project-images/mock-oly-arm.mp4"),
        require("@/assets/project-images/oly-arm-tool.mp4"),
      ],
      coverImg: require("@/assets/project-images/olympic-arm.jpg"),
      productUrl: "https://nauticusrobotics.com/olympic-arm/",
      techStack: ["Vue.js", "ROS", "Python", "Docker"],
    },
    // {
    //   title: "Supplier Nexus",
    //   companyName: "Google",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec arcu mauris. Cras congue eu magna ut efficitur. Donec nec elit a massa cursus consectetur. Nam maximus consequat metus eu malesuada. Pellentesque aliquet, lectus id maximus laoreet, nulla libero fermentum risus, varius iaculis arcu turpis in nisl. Curabitur accumsan a ligula vitae ullamcorper. Nulla eget ultrices sapien, at auctor dui. Aenean sollicitudin, metus sed.",
    //   media: [
    //     require("@/assets/project-images/find-a-supplier.png"),
    //     require("@/assets/project-images/supplier-nexus-art.png"),
    //     require("@/assets/project-images/supplier-nexus-nav.png"),
    //   ],
    //   coverImg: require("@/assets/project-images/find-a-supplier.png"),
    //   techStack: ["Angular", "Typescript", "Mocha/Chai"],
    // },
    {
      title: "Haloguard",
      companyName: "Nauticus Robotics",
      description:
        "Haloguard is a personnel monitoring safety system. Which integrates with multiple cameras to determine the position of people in industrials areas such as Oil rigs and factories. For the Haloguard Project I was in charge of developing and designing the Video Recording Feature. Giving our clients a backlog of video data for any accidents that occured. I also contributed to the development of the User Interface and components.",
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
      projectName: "LAB",
      text: "Lab is a 3D chemistry Lab simulator designed with the intent to allow students to conduct chemistry experiments in a safe and controlled environment. Lab would be beneficial for public schools without funding for a chemistry Lab and would allow users to learn without any risks. Lab was built using C# and Unity 3D.",
      media: require("@/assets/project-images/lab.gif"),
      githubUrl: "https://github.com/ijeriomit/LAB",
      skills: ["C#", "Unity 3D"],
    },
    {
      projectName: "Epoch",
      text: "Epoch is a 2D side-scrolling RPG I built in Unity, full of magic, monsters, and adventure. Players can customize their character’s gear and abilities—projectiles, swords, or magic—and face new enemies and challenges in each level. Collect coins to upgrade skills after every stage and progress through three unique levels. Developed in C#, it combines fast combat with strategic skill-building.",
      media: require("@/assets/project-images/epoch.gif"),
      githubUrl: "https://github.com/ijeriomit/Epoch",
      skills: ["C#", "Unity 3D"],
    },
    {
      projectName: "Personal Portfolio",
      text: "This is the website you are currently navigating, which I designed and developed to market myself and showcase my work. It highlights my skills in web development and design, while also serving as a platform for displaying my completed projects. My portfolio was built using Vue and JavaScript, chosen for their flexibility in creating dynamic, user-friendly interfaces.",
      media: require("@/assets/project-images/portfolio.gif"),
      githubUrl: "https://github.com/ijeriomit/portfolio-site-2.0",
      skills: ["Vue.js", "SCSS"],
    },
    {
      projectName: "LeetCode Practice",
      text: "This GitHub repository features my LeetCode practice examples, primarily coded in JavaScript. By working through these problems, I’ve gained a deeper understanding of data structures, algorithms, and essential programming practices. It reflects my ongoing commitment to honing my problem-solving skills and applying core concepts in real-world coding scenarios.",
      media: require("@/assets/project-images/leetcode.png"),
      githubUrl: "https://github.com/ijeriomit/leetcode-practice",
      skills: ["Javascript"],
    },
    {
      projectName: "ROS Video Recorder",
      text: "A ROS-based system designed to capture images sent over ROS topics and compile them into specified video formats. Developed using Python and ROS, the system has been tested with specially designed Baumer cameras and can integrate seamlessly with any robotic sensor system using ROS. Key functionalities include resizing images, receiving images via an API, and compiling the captured images into various requested video formats.",
      media: require("@/assets/project-images/ROS.png"),
      githubUrl: "https://github.com/ijeriomit/ROS-Video-Recorder",
      skills: ["ROS", "Python", "OpenCV"],
    },
    {
      projectName: "Python Experiments",
      text: "A collection of a differnet python code snippets. Showcases famailiarity with the syntax and concepts of the Python coding language. ",
      media: require("@/assets/project-images/python.jpeg"),
      githubUrl: "https://github.com/ijeriomit/Python",
      skills: ["Python"],
    },
    // {
    //   projectName: "SEP-Agent Creation",
    //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //   media: [require("@/assets/project-images/leetcode.png")],
    //   githubUrl: "https://github.com/ijeriomit/SEP-Agent-Creation",
    //   skills: ["React", "Sindarin", "LLM"],
    // },
  ],
};
