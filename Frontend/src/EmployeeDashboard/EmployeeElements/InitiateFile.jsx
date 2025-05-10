import React, { useState } from "react";

function InitiateFile() {
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`File "${fileName}" Initiated Successfully!`);
  };

  return (
    <div className="container bg-light text-muted">
      <h2 className="mb-4">Initiate New File</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">File Name</label>
          <input type="text" className="form-control" value={fileName} onChange={(e) => setFileName(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Initiate File</button>
      </form>
    </div>
  );
}

export default InitiateFile;
