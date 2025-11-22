import React, { useState } from "react";
import axios from "axios";

function AddStudent({ onClose }) {
  const [student, setStudent] = useState({ name: "", email: "", age: "" });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/students", student);
    alert("Student added successfully!");
    onClose();
    window.location.reload(); // Refresh list after adding
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          width: "400px",
          textAlign: "center",
        }}
      >
        <h2>Add New Student</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={student.name}
            onChange={handleChange}
            required
            style={{ margin: "10px", padding: "8px", width: "90%" }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={student.email}
            onChange={handleChange}
            required
            style={{ margin: "10px", padding: "8px", width: "90%" }}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={student.age}
            onChange={handleChange}
            required
            style={{ margin: "10px", padding: "8px", width: "90%" }}
          />
          <br />
          <button
            type="submit"
            style={{
              backgroundColor: "green",
              color: "white",
              border: "none",
              padding: "10px 20px",
              marginRight: "10px",
              cursor: "pointer",
              borderRadius: "6px",
            }}
          >
            Add
          </button>
          <button
            type="button"
            onClick={onClose}
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "10px 20px",
              cursor: "pointer",
              borderRadius: "6px",
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;