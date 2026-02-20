const emptyExperience = () => ({
  company: "",
  position: "",
  responsibilities: "",
  startDate: "",
  endDate: "",
});

export default function Experience({ disabled, data, onChange }) {
  const handleFieldChange = (index, field, value) => {
    const updated = data.map((job, i) =>
      i === index ? { ...job, [field]: value } : job,
    );
    onChange(updated);
  };

  const handleAdd = () => {
    onChange([...data, emptyExperience()]);
  };

  const handleRemove = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated.length > 0 ? updated : [emptyExperience()]);
  };

  return (
    <section>
      <h3>Experience</h3>

      {data.map((job, index) => (
        <div key={index} className="item-card">
          <button
            type="button"
            className="btn danger"
            onClick={() => handleRemove(index)}
            disabled={disabled}
          >
            Remove
          </button>

          <div className="form-group">
            <label>
              <p>Company</p>
              <input
                type="text"
                value={job.company}
                disabled={disabled}
                placeholder="Tech Innovators Inc."
                onChange={(e) =>
                  handleFieldChange(index, "company", e.target.value)
                }
              />
            </label>

            <label>
              <p>Position</p>
              <input
                type="text"
                value={job.position}
                disabled={disabled}
                placeholder="Software Engineer"
                onChange={(e) =>
                  handleFieldChange(index, "position", e.target.value)
                }
              />
            </label>

            <label>
              <p>Responsibilities</p>
              <textarea
                value={job.responsibilities}
                disabled={disabled}
                placeholder="Developed features, resolved bugs, refactored code..."
                onChange={(e) =>
                  handleFieldChange(index, "responsibilities", e.target.value)
                }
              />
            </label>

            <div className="date-range">
              <label>
                <p>Start Date</p>
                <input
                  type="date"
                  value={job.startDate}
                  disabled={disabled}
                  onChange={(e) =>
                    handleFieldChange(index, "startDate", e.target.value)
                  }
                />
              </label>
              <label>
                <p>End Date</p>
                <input
                  type="date"
                  value={job.endDate}
                  disabled={disabled}
                  onChange={(e) =>
                    handleFieldChange(index, "endDate", e.target.value)
                  }
                />
              </label>
            </div>
          </div>
        </div>
      ))}

      <button type="button" className="btn secondary btn-add" onClick={handleAdd} disabled={disabled}>
        + Add Experience
      </button>
    </section>
  );
}
