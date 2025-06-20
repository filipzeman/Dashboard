import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import About from "./About";
import AddEventModal from "../components/AddEventModal";
import sortData from "../utilities/sortData.js";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [namedays, setNamedays] = useState([]);
  const [editData, setEditData] = useState(null);

  const handleAdd = (event) => {
    fetch("http://localhost:5000/api/birthdays", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    })
      .then((res) => res.json())
      .then((newEvent) => setEvents((prev) => [...prev, newEvent]))
      .catch(console.error);
  };

  const handleEdit = (event) => {
    fetch(`http://localhost:5000/api/birthdays/${event.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    })
      .then((res) => res.json())
      .then((updated) => {
        setBirthdays((prev) =>
          prev.map((ev) => (ev.id === updated.id ? updated : ev))
        );
      });
  };

  const openAddModal = () => {
    setEditData(null);
    setModalOpen(true);
  };
  const openEditModal = (event) => {
    setEditData(event);
    setModalOpen(true);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/birthdays")
      .then((res) => res.json())
      .then((data) => setEvents(data));

    fetch("https://svatkyapi.cz/api/day")
      .then((res) => res.json())
      .then((data) => setNamedays(data.name));
  }, []);

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar onAddClick={openAddModal} />
        <div style={{ marginLeft: "220px", padding: "20px", flex: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  events={events}
                  namedays={namedays}
                  setEvents={setEvents}
                  onEditClick={openEditModal}
                />
              }
            />
            <Route path="/settings" element={<Settings />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        {isModalOpen && (
          <AddEventModal
            onClose={() => setModalOpen(false)}
            onAdd={handleAdd}
            onEdit={handleEdit}
            editData={editData}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
