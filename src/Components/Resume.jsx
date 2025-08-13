import React from "react";

const Resume = () => {
  return (
    <section className="padding" id="resume">
      <h2 style={{ textAlign: "center" }}>Resume</h2>

      {/* Education Section */}
      <section className="timeline">
        <h2>Tertiary</h2>

        <div className="timeline-item">
          <div className="bullet"></div>
          <div className="content">
            <h3>University of The Free State Bloemfontein campus</h3>
            <span className="date">2020 - 2023 (Incomplete)</span>
            <p>
              <em>Bachelors of Computer Information Systems</em>
            </p>
            <p>
              Software Development (ASP.NET), Database Management (SQL), Computer Hardware (A+),
              Networking Fundamentals (N+), Business Management, Entrepreneurship
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="bullet"></div>
          <div className="content">
            <h3>Cisco Networking Academy</h3>
            <span className="date">2022 - Present</span>
            <ul>
              <li>Network Technician</li>
              <li>Packet Tracer</li>
              <li>Junior Cybersecurity Analyst</li>
              <li>Ethical Hacking</li>
              <li>Python Essentials 1</li>
              <li>JavaScript Essentials 1 & 2</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="bullet"></div>
          <div className="content">
            <h3>NetCampus Group</h3>
            <span className="date">2025</span>
            <ul>
              <li>Cybersecurity Workshop</li>
              <li>Microsoft AI Fluency</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="bullet"></div>
          <div className="content">
            <h3>FNB App Academy</h3>
            <span className="date">2025 - 9 weeks</span>
            <ul>
              <li>Full-Stack Development</li>
              <li>Django Framework</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="bullet"></div>
          <div className="content">
            <h3>Udemy</h3>
            <span className="date">2024 - Present</span>
            <ul>
              <li>CompTIA Security+</li>
              <li>Python 8 Applications Course</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="bullet"></div>
          <div className="content">
            <h3>PLP Academy</h3>
            <span className="date">Present</span>
            <ul>
              <li>Software Development</li>
              <li>Artificial Intelligence</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="timeline">
        <h2>Work Experience</h2>

        <div className="timeline-item">
          <div className="bullet"></div>
          <div className="content">
            <h3>Barcelona Internet Cafe</h3>
            <span className="date">July 2022 – December 2022</span>
            <strong>Position: IT Technician & Customer Support</strong>
            <p>
              Assisted customers with technical issues, managed hardware and software installations,
              and provided training on various applications. Contributed to maintaining the
              cafe&#39;s computer systems.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="bullet"></div>
          <div className="content">
            <h3>Outlier AI (Online)</h3>
            <span className="date">November 2024 – February 2025</span>
            <strong>Position: Freelance Quality Assurance Tester (C#)</strong>
            <p>
              Tested and ensured the quality of C# applications, identified bugs, and resolved
              issues on the Outlier platform.
            </p>
          </div>
        </div>
      </section>

      {/* Download Resume */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <a
          href="/docs/CV.pdf"
          target="_Blank"
          rel="noopener noreferrer"
          className="download-btn"
          style={{
            backgroundColor: "#333",
            color: "#fff",
            padding: "10px 20px",
            textDecoration: "none",
            borderRadius: "5px",
          }}
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
