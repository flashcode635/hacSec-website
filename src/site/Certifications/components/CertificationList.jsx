import React from "react";
import CertificationCard from "./CertificationCard";
import certification from "../assets/certification.webp";
const certifications = [
  {
    id: 1,
    title: "CompTIA Security+",
    level: "Foundation",
    description: "Globally recognized certification validating baseline cybersecurity skills",
    duration: "3 months",
    prerequisites: "None",
    icon: certification
  },
  {
    id: 2,
    title: "CompTIA CySA+",
    level: "Intermediate",
    description: "Apply behavioral analytics to networks to improve overall IT security",
    duration: "6 months",
    prerequisites: "Security+ recommended",
    icon: certification
  },
  {
    id: 3,
    title: "CompTIA CASP+",
    level: "Advanced",
    description: "Advanced security practitioner certification for enterprise security",
    duration: "12 months",
    prerequisites: "5 years experience recommended",
    icon: certification
  }
];

const CertificationList = () => {
  return (
    <div className="certification-list">
      {certifications.map((cert) => (
        <CertificationCard key={cert.id} certification={cert} />
      ))}
    </div>
  );
};

export default CertificationList;