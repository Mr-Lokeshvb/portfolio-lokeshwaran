import React from "react";
import portfolioData from "../data/portfolioData";

const WorkExperience = () => {
  const workExperience = portfolioData.workExperience || [];

  return (
    <section id="experience" className="work-experience">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">
            WORK & REAL-WORLD EXPERIENCE
          </span>

          <h2>
            Experience Beyond <span>Academic Projects</span>
          </h2>

          <p>
            Professional experience and practical software built for
            real-world requirements.
          </p>
        </div>

        <div className="experience-grid">
          {workExperience.map((item, index) => (
            <article className="experience-card" key={item.id || index}>
              <div className="experience-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <span className="experience-type">
                {item.type}
              </span>

              <h3>{item.title}</h3>

              <div className="experience-meta">
                <span>{item.organization}</span>
                <span>{item.duration}</span>
              </div>

              <p className="experience-description">
                {item.description}
              </p>

              {item.skills?.length > 0 && (
                <div className="experience-highlights">
                  {item.skills.map((skill, skillIndex) => (
                    <div className="highlight-item" key={skillIndex}>
                      <span>✓</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              )}

              {item.highlights?.length > 0 && (
                <div className="experience-highlights">
                  {item.highlights.map((highlight, highlightIndex) => (
                    <div className="highlight-item" key={highlightIndex}>
                      <span>✓</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="experience-tech">
                {(item.tech || []).map((technology, techIndex) => (
                  <span key={techIndex}>{technology}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
