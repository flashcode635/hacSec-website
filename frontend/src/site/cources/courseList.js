// Import course images
import ethicalHackingImg from '../../images/cource-images/fundamentals.jpeg';
import networkSecurityImg from '../../images/cource-images/pexels-pixabay-207580.jpg';
import malwareAnalysisImg from '../../images/cource-images/malware-analysis.jpg';
import cloudSecurityImg from '../../images/cource-images/cloud.jpg';
import digitalForensicsImg from '../../images/cource-images/pexels-joshsorenson-1054397.jpg';
import socAnalystImg from '../../images/cource-images/soc.png';

const coursesList = [
  {
    id: 1,
    title: "Ethical Hacking Advance",
    description: "Learn the basics of ethical hacking and penetration testing methodologies.",
    duration: "8 weeks",
    level: "Beginner",
    modules:10,
    image: ethicalHackingImg,
    details: "This course is designed for beginners who want to learn the basics of ethical hacking and penetration testing. It covers the fundamentals of network security, web application security, and cryptography. The course includes practical exercises and real-world examples to help students understand the concepts and apply them in a safe and legal environment.",
    price: "$39"
  },
  {
    id: 2,
    title: "Advanced Network Security",
    description: "Master advanced techniques for securing networks against modern threats.",
    duration: "10 weeks",
    level: "Intermediate",
    modules:10,
    image: networkSecurityImg,
    details: "This course is designed for intermediate-level students who want to master advanced network security techniques. It covers topics such as network architecture, firewalls, intrusion detection systems, and secure network design. The course includes practical exercises and real-world examples to help students understand the concepts and apply them in a safe and legal environment.",
    price: "$49"
  },
  {
    id: 3,
    title: "Reverse Engineering",
    description: "Develop skills to analyze and reverse engineer malicious software.",
    duration: "12 weeks",
    level: "Advanced",
    modules:20,
    image: malwareAnalysisImg,
    details: "This course is designed for advanced-level students who want to develop skills in malware analysis and reverse engineering. It covers topics such as malware analysis, reverse engineering, and digital forensics. The course includes practical exercises and real-world examples to help students understand the concepts and apply them in a safe and legal environment.",
    price: "$99"
  },
  {
    id: 4,
    title: "Cloud Security Specialist",
    description: "Develop the expertise to to secure cloud infrastructure and applications against modern threats and vulnerabilities.",
    duration: "8 weeks",
    level: "Intermediate",
    modules:12,
    image: cloudSecurityImg,
    details: "This course is designed for intermediate-level students who want to develop skills in cloud security. It covers topics such as cloud security, cloud architecture, and cloud security tools. The course includes practical exercises and real-world examples to help students understand the concepts and apply them in a safe and legal environment.",
    price: "$79"     
  },
  {
    id: 5,
    title: "Digital Forensics Investigation",
    description: "Master the skills needed to investigate cybersecurity incidents and collect digital evidence.Learn cyber laws and regulations .",
    duration: "9 weeks",
    level: "Intermediate",
    modules:12,

    image: digitalForensicsImg,
    details: "This course is designed for intermediate-level students who want to develop skills in digital forensics and incident response. It covers topics such as digital forensics, incident response, and cybercrime investigation. The course includes practical exercises and real-world examples to help students understand the concepts and apply them in a safe and legal environment.",
    price: "$199"
  },
  {
    id: 6,
    title: "Security Operations Center (SOC) Analyst",
    description: "Learn essential skills for monitoring, detecting, and responding to security threats.",
    duration: "6 weeks",
    level: "Intermediate",
    modules:12,

    image: socAnalystImg,
    details: "This course is designed for intermediate-level students who want to develop skills in security operations center (SOC) analysis. It covers topics such as incident detection, incident response, and cybercrime investigation. The course includes practical exercises and real-world examples to help students understand the concepts and apply them in a safe and legal environment.",
    price: "$65"
  }
];

export default coursesList;
