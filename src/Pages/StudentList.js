import React, { useEffect, useState } from "react";
import axios from "axios";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null); // for edit popup
  const [form, setForm] = useState({ name: "", email: "", age: "" });

  // Fetch all students
  const loadStudents = () => {
    axios
      .get("http://localhost:8080/students")
      .then((res) => setStudents(res.data))
      .catch((err) => console.error("Error:", err));
  };

  useEffect(() => {
    loadStudents();
  }, []);

  // Open edit popup
  const handleEdit = (student) => {
    setEditStudent(student);
    setForm({
      name: student.name,
      email: student.email,
      age: student.age,
    });
  };

  // Save edited data
  const handleUpdate = () => {
    axios
      .put(`http://localhost:8080/students/${editStudent.id}`, form)
      .then(() => {
        alert("Updated Successfully!");
        setEditStudent(null);
        loadStudents();
      })
      .catch((err) => console.error("Update error:", err));
  };

  // Delete student
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      axios
        .delete(`http://localhost:8080/students/${id}`)
        .then(() => {
          alert("Deleted!");
          loadStudents();
        })
        .catch((err) => console.error("Delete error:", err));
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>👇Student List👇</h2>
      <br></br>

      {students.length === 0 ? (
        <p>No students found. Try adding some!</p>
      ) : (
        <table
          style={{
            margin: "auto",
            borderCollapse: "collapse",
            width: "70%",
            border: "1px solid black",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "black", color: "white" }}>
              <th style={{ border: "1px solid black", padding: "10px" }}>ID</th>
              <th style={{ border: "1px solid black", padding: "10px" }}>Name</th>
              <th style={{ border: "1px solid black", padding: "10px" }}>Email</th>
              <th style={{ border: "1px solid black", padding: "10px" }}>Age</th>
              <th style={{ border: "1px solid black", padding: "10px" }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td style={{ border: "1px solid black", padding: "10px" }}>{s.id}</td>
                <td style={{ border: "1px solid black", padding: "10px" }}>{s.name}</td>
                <td style={{ border: "1px solid black", padding: "10px" }}>{s.email}</td>
                <td style={{ border: "1px solid black", padding: "10px" }}>{s.age}</td>

                <td style={{ border: "1px solid black", padding: "10px" }}>
                  <button
                    style={{
                      background: "green",
                      color: "white",
                      padding: "5px 10px",
                      marginRight: "10px",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={() => handleEdit(s)}
                  >
                    Edit
                  </button>

                  <button
                    style={{
                      background: "red",
                      color: "white",
                      padding: "5px 10px",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDelete(s.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* EDIT POPUP */}
      {editStudent && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "8px",
              width: "350px",
            }}
          >
            <h3>Edit Student</h3>

            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Name"
              style={{ width: "100%", margin: "10px 0", padding: "8px" }}
            />

            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Email"
              style={{ width: "100%", margin: "10px 0", padding: "8px" }}
            />

            <input
              type="number"
              value={form.age}
              onChange={(e) => setForm({ ...form, age: e.target.value })}
              placeholder="Age"
              style={{ width: "100%", margin: "10px 0", padding: "8px" }}
            />

            <button
              style={{
                background: "green",
                color: "white",
                padding: "8px 12px",
                marginRight: "10px",
                border: "none",
                cursor: "pointer",
              }}
              onClick={handleUpdate}
            >
              Save
            </button>

            <button
              style={{
                background: "gray",
                color: "white",
                padding: "8px 12px",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => setEditStudent(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentList;

