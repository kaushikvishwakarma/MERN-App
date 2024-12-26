import React, { useState, useEffect } from 'react'

const Read = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  async function getData() {
    const response = await fetch("http://localhost:5000");
    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      setData(result);
      setError();
    }
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <div className="container my-2">
      {error && <div class="alert alert-danger"> {error} </div>}
      <h2 className='text-center'>All Data</h2>
      <div className="row">
        {data.map((ele) => (<div key={ele._id} className='col-3'>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{ele.email}</h6>
                <p className="text-muted">{ele.age}</p>
                <span className="card-link">Delete</span>
                <span className="card-link">Edit{" "}</span>
              </div>
            </div>
          </div>
      ))}

      </div>
    </div>
  )
}

export default Read
