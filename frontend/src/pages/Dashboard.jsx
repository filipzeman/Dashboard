import React, { useState } from "react";
import "../styles/Dashboard.css";

function Dashboard({ events, namedays, onEditClick }) {
  const today = new Date().toISOString().slice(0, 10);

  const startEdit = (event) => {
    setEditData(event);
    setModalOpen(true);
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>
          Today is <strong>{today}</strong> | <strong>💐 {namedays}</strong>
        </p>
      </header>

      <main className="dashboard-main">
        <section className="dashboard-section">
          <h2>Upcoming Events</h2>
          <ul className="event-list">
            {events.map((event) => (
              <li key={event.id}>
                <span>
                  {event.type === "nameday" ? "💐" : "🎂"} {event.name}
                </span>
                <span>{event.date}</span>
                <button onClick={() => onEditClick(event)}>✏️</button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
