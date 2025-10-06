import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  IGDTUW,
  IIT,
  swc,
  threejs,
  NIELIT,
  python,
  sql,
  c,
  cs, wholeset,
  MRS,
  WBNS,
  LC,
  AR
} from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI/ML Model Developer",
    icon: web,
  },
  {
    title: "DL Model Developer  ",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Data Scientist",
    icon: creator,
  },
];

const technologies = [
   {
    name: "python",
    icon: python,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C#",
    icon: cs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
   {
    name: "Node JS",
    icon: nodejs,
  },
   {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
 
];

const experiences = [
  {
    title: "AR Intern (Online)",
    company_name: "IGDTUW, Delhi",
    icon:IGDTUW,
    iconBg: "#383E56",
    date: "5th June - 18th July, 2023",
    points: [
      "Developed an Android application to project 3D model of the target object along with brief description.",
      "Gained hands-on experience in developing AR based websites by using A-Frame.",
      "Participated in weekly reviews and presentations, enhancing communication skills and technical documentation practices.",
      "Participated in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "AR Intern (On-Site)",
    company_name: "IIT Guwahati",
    icon: IIT,
    iconBg: "#E6DEDD",
    date: "22nd June - 22nd July, 2023",
    points: [
      "Worked on Avatar Mirroring using Microsoft Kinect, enabling real-time motion tracking and mapping of human body movements onto a 3D avatar in Unity 3D.",
      "Gained hands-on experience in Unity 3D and C# scripting, contributing to interactive development workflows and enhancing real-time simulation accuracy.",
      "Assisted in creating a demonstrable prototype for body movement capture and avatar synchronization, supporting ongoing research in human-computer interaction.",
      "Prepared lecture materials and tutorials on Unity 3D for students enrolled in related coursework, helping them understand the fundamentals and project development pipeline.",
    ],
  },
  {
    title: "AI/ML (WBL)",
    company_name: "NIELIT Kokrajhar EC",
    icon: NIELIT,
    iconBg: "#383E56",
    date: "1st Aug 2024 - 31st Jan 2025",
    points: [
      "Developed a real-time Emotion Detection system using CNN to classify human facial expressions, contributing to research in affective computing and intelligent systems.",
      "Conducted 5-day AI/ML workshop series under PM-Shri Programme across multiple educational institutions, delivering technical sessions and demonstrations.",
      "Conducted a 2-week Cyber Security Awareness workshop exclusively for police personnel, focusing on digital safety, threat identification, and preventive measures.",
      "Gained teaching experience by mentoring students at NIELIT in Python and JavaScript, delivering hands-on training and guiding them through real-world coding exercises and mini-projects.",
    ],
  },
  {
    title: "ML Trainee",
    company_name: "NIELIT Kokrajhar EC",
    icon: NIELIT,
    iconBg: "#383E56",
    date: "4th Apr 2025 - 30th Jun 2025",
    points: [
      "Performed literature reviews to identify relevant ML methods and benchmarks.",
      "Collaborated with researchers and supported cross-functional teams in model development and data tasks."
    ],
  },
  {
    title: "Assistant Project Engineer",
    company_name: "IIT Guwahati",
    icon: IIT,
    iconBg: "#383E56",
    date: "21st Jul - Present",
    points: [
      "Developing multilingual speech and text corpora through custom tools for data acquisition, cleaning, annotation, and storage, supporting NLP and speech technology applications.",
    ],
  }
  
];

const papers = [
    {
    title: "A Dynamic Approach of Web Pages' Rendering based on Network Speed",
    venue: "IEEE Guwahati Subsection Conference (GCON)",
    year: "2025",
    pages: "pp. 1-6",
    link: "https://ieeexplore.ieee.org/document/11173364",
  },
  {
    title: "Impact of Augmented Reality : Applications in Education",
    venue: "Computational Intelligence and Mathematical Applications",
    year: "2024",
    pages: "pp. 300-304",
    link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003534112-49/impact-augmented-reality-applications-education-khushi-rao-daniel-kr-brahma-jagriti-das-alongbar-wary-gaurav-indra",
  },

];




const projects = [
  {
    name: "Chrome Extension for Optimization",
    description:
      "A dynamic browser extension that intelligently adapts webpage rendering based on the user’s network speed, optimizing performance and enhancing overall browsing experience and satisfaction.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Optimization",
        color: "pink-text-gradient",
      },
    ],
    image: WBNS,
    source_code_link: "https://github.com/dani8946/A-Dynamic-Approach-of-Web-Pages--Rendering-based-on-Network-Speed",
  },
  {
    name: "Emotion Detection Using CNN",
    description:
      "A high-performance CNN-based Emotion Detection model that accurately identifies user emotions with an impressive accuracy of 89.45%, enabling intelligent and responsive human-computer interactions.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "CNN",
        color: "green-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "pink-text-gradient",
      },
    ],
    image: wholeset,
    source_code_link: "https://github.com/dani8946/Emotion-Detection-using-CNN",
  },
  {
    name: "Lung Cancer Risk Prediction",
    description:
      "A machine learning model that effectively classifies risk levels into High, Medium, and Low, achieving a K-fold cross-validation accuracy of 89.57% for reliable and data-driven risk assessment. ",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "SciKit-Learn",
        color: "green-text-gradient",
      },
      {
        name: "Numpy",
        color: "pink-text-gradient",
      },
    ],
    image: LC,
    source_code_link: "https://github.com/dani8946/LungCancerRiskPrediction/blob/main/ML_project.ipynb",
  },
  {
    name: "Smart Waste Classifier ",
    description:
      "A MobileNetV2 powered Smart Waste Classifier, accurately categorizes waste into six distinct types — plastic, paper, metal, trash, glass, and cardboard enabling automated eco-friendly waste sorting and promoting sustainable environment practices.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "TensorflowKeras",
        color: "green-text-gradient",
      },
      {
        name: "MobileNetV2",
        color: "pink-text-gradient",
      },
    ],
    image: swc,
    source_code_link: "https://github.com/dani8946/SmartWasteClassifier",
  },
  {
    name: "Content Based Movie Recommendation System",
    description:
      "A system that recommends the movie based on the content of the movie demonstrating the use of Unsupervised Learning.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Unsupervised",
        color: "green-text-gradient",
      },
      {
        name: "Cosine-Similarity",
        color: "pink-text-gradient",
      },
    ],
    image: MRS,
    source_code_link: "https://github.com/dani8946/ContentBasedMovieRecommendationSystem",
  },
  {
    name: "AR Application for Education",
    description:
      "An interactive application that dynamically renders 3D models of target images along with concise object descriptions, enhancing user engagement and visual understanding through immersive technology.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "Unity3D",
        color: "green-text-gradient",
      },
      {
        name: "VuforiaEngine",
        color: "pink-text-gradient",
      },
    ],
    image: AR,
    source_code_link: "https://github.com/dani8946/AR-In-Education",
  },
];

export { services, papers, technologies, experiences,  projects };
