export default function CVPreview({ cv }) {
  const { general, education, experience } = cv;

  return (
    <div className="cv-document">
      {/* Header / General */}
      <header className="cv-header">
        <div className="cv-name">{general.name || "Your Name"}</div>
        <div className="cv-contact">
          <span>{general.email || "you@email.com"}</span>
          <span>{general.phone || "Phone number"}</span>
        </div>
      </header>

      {/* Education */}
      <section className="cv-section">
        <div className="cv-section-title">Education</div>

        {education.length === 0 ? (
          <div className="cv-empty">No education added.</div>
        ) : (
          education.map((edu, index) => (
            <div key={index} className="cv-item">
              <div className="cv-item-header">
                <div className="cv-item-title">{edu.school || "School Name"}</div>
                <div className="cv-item-date">
                  {edu.startDate || "Start"} — {edu.endDate || "End"}
                </div>
              </div>
              <div className="cv-item-subtitle">{edu.studyTitle || "Degree / Field of Study"}</div>
            </div>
          ))
        )}
      </section>

      {/* Experience */}
      <section className="cv-section">
        <div className="cv-section-title">Experience</div>

        {experience.length === 0 ? (
          <div className="cv-empty">No experience added.</div>
        ) : (
          experience.map((job, index) => (
            <div key={index} className="cv-item">
              <div className="cv-item-header">
                <div className="cv-item-title">{job.company || "Company Name"}</div>
                <div className="cv-item-date">
                  {job.startDate || "Start"} — {job.endDate || "End"}
                </div>
              </div>
              <div className="cv-item-subtitle">{job.position || "Job Title"}</div>
              <div className="cv-item-desc">{job.responsibilities || "Key responsibilities and achievements..."}</div>
            </div>
          ))
        )}
      </section>
    </div>
  );
}
