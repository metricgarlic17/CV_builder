import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CVPreview from "./components/CVPreview";

const App = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [draftCV, setDraftCV] = useState({
    general: { name: "", email: "", phone: "" },
    education: [{ school: "", studyTitle: "", startDate: "", endDate: "" }],
    experience: [
      {
        company: "",
        position: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
      },
    ],
  });

  const handleSave = () => setIsEditing(false);
  const handleEdit = () => setIsEditing(true);
  const printCV = () => {
    window.print();
  };

  return (
    <div className="app-container">
      <div className="preview-pane">
        <CVPreview cv={draftCV} />
      </div>

      <div className="editor-pane">
        <div className="editor-header">
          <h2>CV Builder</h2>
          {isEditing ? (
            <button className="btn primary" onClick={handleSave}>Save & Preview</button>
          ) : (
            <div style={{ display: "flex", gap: "10px" }}>
              <button className="btn primary" onClick={printCV}>Print CV</button>
              <button className="btn secondary" onClick={handleEdit}>Edit Details</button>
            </div>
          )}
        </div>

        <div className={`editor-content ${!isEditing ? "disabled-view" : ""}`}>
          <div className="card">
            <GeneralInfo
              disabled={!isEditing}
              data={draftCV.general}
              onChange={(updatedGeneral) =>
                setDraftCV((prev) => ({ ...prev, general: updatedGeneral }))
              }
            />
          </div>

          <div className="card">
            <Education
              disabled={!isEditing}
              data={draftCV.education}
              onChange={(updateEducation) =>
                setDraftCV((prev) => ({ ...prev, education: updateEducation }))
              }
            />
          </div>

          <div className="card">
            <Experience
              disabled={!isEditing}
              data={draftCV.experience}
              onChange={(updatedExperience) =>
                setDraftCV((prev) => ({ ...prev, experience: updatedExperience }))
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
