/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Bash",
  title: "Hi all, I'm Abdullah",
  subTitle: `As a Data Engineer 🚀, I excel in ETL pipelines, big data processing, and scalable database management. I optimize data workflows and integrate emerging technologies for analytics and machine learning.`,
  resumeLink:
    "https://drive.google.com/file/d/1ZmbesyWt64U7nI1Shd7FzzqKL5JZ33c1/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/abdullahbh",
  linkedin: "https://www.linkedin.com/in/abdullahbasharat/",
  gmail: "abdullahbasharat111@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "CRAZY FULL STACK DATA SCIENTIST WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    // Data Engineer Skills
    emoji("⚡ ETL pipelines, scalable databases, real-time data warehouses"),
    emoji("⚡ Integration of AWS, GCP for data analytics"),
    emoji("⚡ Data quality assurance and validation processes"),

    // Data Scientist Skills
    emoji("⚡ EDA, predictive modeling"),
    emoji("⚡ Data Analysis and Visualization, collaborative data projects"),

    // AI Engineer Skills
    emoji("⚡ ML/DL Applications and optimizations"),
    emoji("⚡ NLP models, LLMs, RAG, Vector DBs"),
    emoji("⚡ Computer Vision probelms, CNNs, GANs"),
    emoji("⚡ Integration of AI with web and mobile platforms")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL/NoSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AI",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "ML/DL",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Natural Language Processing",
      fontAwesomeClassname: "fas fa-language"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fab fa-tensor"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fab fa-pytorch"
    },

    {
      skillName: "Scikit-learn",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "Big Data",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Data Visualization",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Data Mining",
      fontAwesomeClassname: "fas fa-cog"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Cloud Computing",
      fontAwesomeClassname: "fas fa-cloud"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "FAST NUCES Islamabad",
      logo: require("./assets/images/FAST2.png"),
      subHeader: "Batchelor of Science in Data Science",
      duration: "September 2020 - June 2024",
      descBullets: [
        "Actively participated in and led numerous campus and society-level competitions",
        "Organized and managed various events",
        "Held senior positions in societies such as the Google Developers Club Students and FAST Data Science Society",
        "Contributed to NasCon for 4 Years, one of Islamabad's most anticipated events"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "AI Models", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "Fun",
      progressPercentage: "100%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Scientist",
      company: "Logic Leap Systems",
      companylogo: require("./assets/images/LLS3.jpg"),
      date: "June 2024 – Present",
      descBullets: [
        "Leading the Data team to develop and deploy AI models for various clients.",
        "Developed an ERP system that is fully customized to the client's needs and requirements.",
        "Working on SAAS products that are integrated with ERP systems."
      ]
    },
    {
      role: "Data Scientist",
      company: "Upstart Commerce",
      companylogo: require("./assets/images/up2.png"),
      date: "Sept 2023 – May 2024",
      descBullets: [
        "Fine-tuned YOLOv8 → DinoV2 → FAISS",
        "Developed an advanced visual search system with a comprehensive pipeline that processes user images and delivers relevant dataset images in under one second via a Flutter app.",
        "Maintained high code quality by conducting rigorous testing of various Object Detection mod- els, Feature Extractors, and Searching techniques to ensure optimal performance and accuracy."
      ]
    },
    {
      role: "Data Analyst",
      company: "Youpal Group - Sweden",
      companylogo: require("./assets/images/you1.png"),
      date: "Jan 2023 – Mar 2023",
      descBullets: [
        "Implemented advanced chatbot pipelines to enhance real-time customer interactions.",
        "Integrated DevOps practices to improve project workflows and efficiency."
      ]
    },
    {
      role: "Data Analyst",
      company: "Engro",
      companylogo: require("./assets/images/engro1.png"),
      date: "June 2022 – Aug 2022",
      descBullets: [
        "Improved network efficiency by 15% through data analysis in the NOC.",
        "Automated processes, boosting efficiency by 20% and saving 10 hours/week."
      ]
    },
    {
      role: "AI Researcher",
      company: "Data Insight Lab ",
      companylogo: require("./assets/images/di.jpeg"),
      date: "June 2022 – Aug 2022",
      descBullets: [
        "Improved network efficiency by 15% through data analysis in the NOC.",
        "Automated processes, boosting efficiency by 20% and saving 10 hours/week."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/volods.png"),
      projectName: "Volods Jobs",
      projectDesc: "Find your dream remote job without the hassle",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://jobs.volods.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/LLS.png"),
      projectName: "Logic Leap System",
      projectDesc: "Where Logic Meets Creativity, Business Takes Leap",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://logicleapsystem.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/im1.png"),
      projectName: "ImageMart",
      projectDesc:
        "Visual Search System",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Meee ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-341-4301627",
  email_address: "abdullahbasharat111@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
