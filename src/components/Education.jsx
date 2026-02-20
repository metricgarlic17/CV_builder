const emptyEducation = () => ({
  school: "",
  studyTitle: "",
  studyDate: "",
});

export default function Education({ disabled, data, onChange }) {
  const handleFieldChange = (index, field, value) => {
    const updated = data.map((edu, i) =>
      i === index ? { ...edu, [field]: value } : edu,
    );
    onChange(updated);
  };

  const handleAdd = () => {
    onChange([...data, emptyEducation()]);
  };

  const handleRemove = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated.length > 0 ? updated : [emptyEducation()]);
  };

  return (
    <section>
      <h3>Education</h3>

      {data.map((edu, index) => (
        <div key={index} className="item-card">


          <div className="form-group">
            <label>
              <p>School</p>
              <input
                type="text"
                value={edu.school}
                disabled={disabled}
                placeholder="University of Examples"
                onChange={(e) =>
                  handleFieldChange(index, "school", e.target.value)
                }
              />
            </label>

            <label>
              <p>Study Title</p>
              <input
                type="text"
                value={edu.studyTitle}
                disabled={disabled}
                placeholder="Bachelor of Science in Computer Science"
                onChange={(e) =>
                  handleFieldChange(index, "studyTitle", e.target.value)
                }
              />
            </label>

            <div className="date-range">
              <label>
                <p>Start Date</p>
                <input
                  type="date"
                  value={edu.startDate}
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
                  value={edu.endDate}
                  disabled={disabled}
                  onChange={(e) =>
                    handleFieldChange(index, "endDate", e.target.value)
                  }
                />
              </label>
            </div>
          </div>

          <button
            type="button"
            className="btn danger"
            onClick={() => handleRemove(index)}
            disabled={disabled}
          >
            Remove
          </button>
        </div>
      ))}

      <button type="button" className="btn secondary btn-add" onClick={handleAdd} disabled={disabled}>
        + Add Education
      </button>
    </section>
  );
}
