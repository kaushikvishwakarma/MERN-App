import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const apiurl = "https://mern-app-y3l7.onrender.com";
  async function getData() {
    const response = await fetch(apiurl);
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
// This is control all delete operations 
const handleDelete = async (id)=>{
  const response=await fetch(`${apiurl}/${id}`,{
    method:"DELETE"
  });
  const result = await response.json();
  if(!response.ok){
    console.log(result.error);
    setError(result.error);
    return;
  }
  if(response.ok){
    setError("Deleted Successfully");


    setTimeout(()=>{
      setError("Deleted Successfully");
      getData();
    },1000)
    return;
  }


}


// this function is to fetch all the data 
  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <div className="container my-2">
      {error && <div className="alert alert-danger text-center">{error}</div>}
      <h2 className='text-center mb-4'>All Data</h2>
      <div className="row">
        {data?.map((ele) => (
          <div key={ele._id} className='col-3 mb-3'>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{ele.email}</h6>
                <p className="text-muted">{ele.age}</p>
                <a className="card-link text-danger" onClick={() => { handleDelete(ele._id) }}>Delete</a>
                <Link to={`/${ele._id}`} className="card-link">Edit{" "}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Read
