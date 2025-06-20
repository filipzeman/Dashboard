import React, { useState } from "react";
import "./AddEventModal.css";

function AddEventModal({ onClose, onAdd, onEdit, editData }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("birthday");

  const handleSubmit = () => {
    if (!name || !date) return;

    const updated = { ...editData, name, date, type };
    editData ? onEdit(updated) : onAdd({ name, date, type });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{editData ? "Edit event" : "Add Event"}</h2>

        <div className="type-switch">
          <label>
            <input
              type="radio"
              name="type"
              value="birthday"
              checked={type === "birthday"}
              onChange={() => setType("birthday")}
            />
            🎂 Birthday{" "}
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="nameday"
              checked={type === "nameday"}
              onChange={() => setType("nameday")}
            />
            💐 Nameday
          </label>
        </div>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <div className="modal-actions">
          <button onClick={handleSubmit}>Add</button>
          <button onClick={onClose} className="cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddEventModal;
