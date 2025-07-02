import React from "react";

const eventData = {
  title: "CyberX Bahrain 2025",
  subtitle: "Leading Cyber Security Event in Manama, Bahrain",
  date: "April 23, 2025",
  location: "Manama, Bahrain",
  description: `The 21st CyberX Global Series and the 2nd Annual CyberX Summit & Awards will unite cybersecurity leaders, innovators, and industry professionals to discuss cutting-edge advancements and solutions. This premier event offers a transformative platform for collaboration and knowledge-sharing in an increasingly complex cyber landscape.`,
  highlights: [
    "Explore the latest in AI, IoT, cloud computing, and big data analytics in cybersecurity.",
    "Hear from top experts from Bahrain’s National Cyber Security Centre and Ministry of Interior organizations.",
    "Network with industry leaders and innovators.",
    "Learn about Bahrain's National Cybersecurity Strategy and digital transformation initiatives.",
  ],
  agenda: [
    { time: "09:00 AM", topic: "Registration & Welcome Coffee" },
    { time: "10:00 AM", topic: "Opening Keynote: Cybersecurity Trends 2025" },
    { time: "11:00 AM", topic: "Panel: Protecting Critical Infrastructure" },
    { time: "12:30 PM", topic: "Networking Lunch" },
    { time: "02:00 PM", topic: "Workshop: AI & Cyber Defense" },
    { time: "04:00 PM", topic: "Awards Ceremony & Closing Remarks" },
  ],
  speakers: [
    {
      name: "Dr. Aisha Al Khalifa",
      title: "Director, National Cyber Security Centre",
      bio: "Expert in national cybersecurity policies and digital infrastructure protection.",
    },
    {
      name: "Mr. Omar Saeed",
      title: "Chief Technology Officer, CyberX",
      bio: "Leader in cybersecurity innovation and AI-driven defense solutions.",
    },
  ],
};

const PageEvents = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: 900, margin: "auto", padding: 20 }}>
      <header style={{ textAlign: "center", marginBottom: 40 }}>
        <h1>{eventData.title}</h1>
        <h3>{eventData.subtitle}</h3>
        <p>
          <strong>Date:</strong> {eventData.date} | <strong>Location:</strong> {eventData.location}
        </p>
      </header>

      <section style={{ marginBottom: 40 }}>
        <h2>About the Event</h2>
        <p>{eventData.description}</p>
        <ul>
          {eventData.highlights.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2>Agenda</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            {eventData.agenda.map(({ time, topic }, idx) => (
              <tr key={idx} style={{ borderBottom: "1px solid #ccc" }}>
                <td style={{ padding: "8px 12px", fontWeight: "bold", width: 120 }}>{time}</td>
                <td style={{ padding: "8px 12px" }}>{topic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2>Speakers</h2>
        {eventData.speakers.map(({ name, title, bio }, idx) => (
          <div key={idx} style={{ marginBottom: 20 }}>
            <h3>{name}</h3>
            <p><em>{title}</em></p>
            <p>{bio}</p>
          </div>
        ))}
      </section>

      <section style={{ textAlign: "center" }}>
        <h2>Register Now</h2>
        <button
          style={{
            backgroundColor: "#0072CE",
            color: "white",
            border: "none",
            padding: "12px 24px",
            fontSize: 16,
            cursor: "pointer",
            borderRadius: 4,
          }}
          onClick={() => alert("Registration functionality coming soon!")}
        >
          Register
        </button>
      </section>
    </div>
  );
};

export default PageEvents;

