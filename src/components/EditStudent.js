import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditStudent() {
  const [student, setStudent] = useState({ name: "", email: "", age: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/students/${id}`)
      .then(response => setStudent(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/students/${id}`, student)
      .then(() => navigate("/"))
      .catch(error => console.error(error));
  };

  return (
    <div className="container">
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit} className="student-form">
        <input type="text" name="name" value={student.name} onChange={handleChange} required />
        <input type="email" name="email" value={student.email} onChange={handleChange} required />
        <input type="number" name="age" value={student.age} onChange={handleChange} required />
        <button type="submit" className="btn-update">Update</button>
      </form>
    </div>
  );
}

export default EditStudent;
