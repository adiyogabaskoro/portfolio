    import React from "react";

    function Works() {
    const skills = [
        { name: "Photoshop", level: 90 },
        { name: "Illustrator", level: 80 },
        { name: "InDesign", level: 70 },
        { name: "After Effects", level: 60 },
    ];

    const projects = [
        { title: "Project One", img: "/p1.jpg" },
        { title: "Project Two", img: "/p2.jpg" },
        { title: "Project Three", img: "/p3.jpg" },
    ];

    return (
        <div className="works">
        <h2>Portfolio & Resume</h2>

        {/* Resume / Skills */}
        <div className="resume-grid">
            <div className="skills">
            <h3>Software Skills</h3>
            {skills.map((s, i) => (
                <div key={i} className="skill">
                <div className="skill-label">
                    <span>{s.name}</span>
                    <span>{s.level}%</span>
                </div>
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${s.level}%` }}></div>
                </div>
                </div>
            ))}
            </div>

            <div className="experience">
            <h3>Experience</h3>
            <ul>
                <li><strong>Art Director</strong> - White Fish Advertising Co.</li>
                <li><strong>Senior Graphic Designer</strong> - Pyramid Sun Advertising Co.</li>
                <li><strong>Graphic Designer</strong> - Planet Stationary & Printing</li>
                <li><strong>Graphic Designer</strong> - Paly Graphic Advertising Agency</li>
            </ul>
            </div>
        </div>

        {/* Portfolio */}
        <div className="portfolio-grid">
            {projects.map((p, i) => (
            <div key={i} className="portfolio-card">
                <img src={p.img} alt={p.title} />
                <h3>{p.title}</h3>
            </div>
            ))}
        </div>
        </div>
    );
    }

    export default Works;
