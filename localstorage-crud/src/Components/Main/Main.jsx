import React from 'react'
import { useRef, useState, useEffect } from 'react';

const Main = () => {
  const [Data, setData] = useState([])
  const [editData , setEdit] = useState({})
  const [index ,setIndex] = useState()
  const name = useRef();
  const add = useRef();
  const query = useRef();

  useEffect(() => {
    // Load items from local storage on component mount
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setData(storedItems);
    console.log(storedItems, "Stored item");
  }, []);

  const handleData = () => {


    if (name.current.value !== "" && add.current.value !== "" && query.current.value !== "") {
      const finalData = {
        name: name.current.value,
        address: add.current.value,
        query: query.current.value,
      }
      // console.log(Data);

      localStorage.setItem("items", JSON.stringify([...Data, finalData]))
    }
    else {
      alert("All inputs Required ")
    }
  }

  const handleEdit=(ind)=>{
    setEdit(Data[ind]);
    setIndex(ind)
  }

  const handleChange =(e)=>{
    setEdit({...editData,[e.target.name] : e.target.value})
  }

  const handleFinalUpdate=()=>{
    console.log(editData);

    const FinalData = [...Data];

    FinalData[index] ={...editData}
    console.log(FinalData);

    setData(FinalData);

    setTimeout(()=>{
      localStorage.setItem("items", JSON.stringify(FinalData))
    },2000)
  }

  

  return (
    <>

      <div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: '100px' }}>
          <form style={{ width: '22rem' }}>
            {/*  Name input */}
            <div data-mdb-input-init className="form-outline mb-4" style={{ display: "flex" }}>
              <h5> Name:</h5>
              <input type="text" id="form5Example1" className="form-control" style={{ marginLeft: "10px" }} ref={name} />
            </div>

            {/* Address input */}
            <div data-mdb-input-init className="form-outline mb-4" style={{ display: "flex" }}>
              <h5>Address:</h5>
              <input type="text" id="form5Example1" className="form-control" style={{ marginLeft: "10px" }} ref={add} />
            </div>

            {/* Query input */}
            <div data-mdb-input-init className="form-outline mb-4" style={{ display: "flex" }}>
              <h5>Enter Query:</h5>
              <input type="text" id="form5Example1" className="form-control" style={{ marginLeft: "10px" }} ref={query} />
            </div>

            {/* Submit button */}
            <center>
              <button
                data-mdb-ripple-init
                type="button"
                className="btn btn-primary btn-block mb-4"
                onClick={handleData}
              >
                Submit Data
              </button>
            </center>
          </form>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center" }}>
          {
            Data.map((item, index) => (
              <div className="Data" key={index}>
                <center style={{ textAlign: "center", border: "2px solid", width: "400px", padding: "10px" }}>
                  <h1>Details</h1>
                  <h5>Name: {item.name}</h5>
                  <h5>Address: {item.address}</h5>
                  <h5>Query: {item.query}</h5>
                  <button className='btn btn-primary btn-block mb-4' style={{ marginTop: "30px" }} onClick={() => handleEdit(index)}> Edit Data</button>
                </center>
              </div>
            ))
          }
        </div>
      </div>

      {/* Updating Data Field  */}

      <div>
        <center style={{ marginTop: "80px" }}>
          <h1>Update The Data</h1>
        </center>
        <div style={{ display: "flex", justifyContent: "center", marginTop: '30px' }}>
          <form style={{ width: '22rem' }}>
            {/*  Name input */}
            <div data-mdb-input-init className="form-outline mb-4" style={{ display: "flex" }}>
              <h5> Name:</h5>
              <input type="text" id="form5Example1" name='name' className="form-control" style={{ marginLeft: "10px" }} value={editData.name} onChange={(e)=>handleChange(e)}/>
            </div>

            {/* Address input */}
            <div data-mdb-input-init className="form-outline mb-4" style={{ display: "flex" }}>
              <h5>Address:</h5>
              <input type="text" id="form5Example1" name='address' className="form-control" style={{ marginLeft: "10px" }} value={editData.address} onChange={(e)=>handleChange(e)}/>
            </div>

            {/* Query input */}
            <div data-mdb-input-init className="form-outline mb-4" style={{ display: "flex" }}>
              <h5>Enter Query:</h5>
              <input type="text" id="form5Example1" name='query' className="form-control" style={{ marginLeft: "10px" }} value={editData.query} onChange={(e)=>handleChange(e)}/>
            </div>

            {/* Submit button */}
            <center>
              <button
                data-mdb-ripple-init
                type="button"
                className="btn btn-primary btn-block mb-4"
                onClick={handleFinalUpdate}
              >
                Submit Data
              </button>
            </center>
          </form>
        </div>
      </div>
    </>
  )
}

export default Main;