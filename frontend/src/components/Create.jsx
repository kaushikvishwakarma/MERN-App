import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



const Create = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState();
  const [error, setError] = useState("");
  const navigate=useNavigate();

  console.log(name, email, age);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const adduser = { name, email, age }
    const response = await fetch("http://localhost:5000", {
      method: 'POST',
      body: JSON.stringify(adduser),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const result = await response.json();
    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      console.log(result);
      setName('');
      setEmail('');
      setAge(0);
      setError('');
      navigate("/all")
    }
  };

  return (
    <div className='container my-2'>
      {error && <div class="alert alert-danger">{error}</div>}
      <h2 className='text-center'>Enter the date</h2>

      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          {console.log(email)}
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input type="number" className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)} />
          {console.log(age)}
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Create
