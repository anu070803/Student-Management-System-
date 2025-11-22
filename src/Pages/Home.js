import React, { useState } from "react";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";

function Home() {
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showList, setShowList] = useState(false);

  // Light grey button style
  const buttonStyle = {
    padding: "10px 25px",
    width: "170px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    borderRadius: "6px",
    backgroundColor: "#e6e6e6", // light grey
    border: "1px solid #bfbfbf",
    transition: "0.2s",
  };

  const buttonHover = {
    backgroundColor: "#d9d9d9", // slightly darker grey on hover
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          fontSize: "32px",
          fontWeight: "700",
          width: "100%",
        }}
      >
        <span style={{ fontSize: "40px" }}>📘</span>
        Student Management System
        <span style={{ fontSize: "40px" }}>🎓</span>
      </h1>

      <p>Manage your students efficiently and view their details below.</p>

      {/* BUTTONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <button
          style={buttonStyle}
          onMouseOver={(e) =>
            Object.assign(e.target.style, buttonHover)
          }
          onMouseOut={(e) =>
            Object.assign(e.target.style, buttonStyle)
          }
          onClick={() => setShowAddPopup(true)}
        >
          ➕ Add Student
        </button>

        <button
          style={buttonStyle}
          onMouseOver={(e) =>
            Object.assign(e.target.style, buttonHover)
          }
          onMouseOut={(e) =>
            Object.assign(e.target.style, buttonStyle)
          }
          onClick={() => setShowList(!showList)}
        >
          {showList ? "Hide Student List" : "Show Student List"}
        </button>
      </div>

      {/* STUDENT LIST */}
      {showList && <StudentList />}

      {/* POPUP */}
      {showAddPopup && (
        <AddStudent onClose={() => setShowAddPopup(false)} />
      )}
    </div>
  );
}

export default Home;
