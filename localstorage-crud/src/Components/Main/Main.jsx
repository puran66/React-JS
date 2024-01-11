import React from 'react'
import { useRef, useState, useEffect } from 'react';

const Main = () => {
  const [Data, setData] = useState([])
  const name = useRef();
  const add = useRef();
  const query = useRef();

  useEffect(() => {
    // Load items from local storage on component mount
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setData(storedItems);
    // console.log(storedItems);
  }, []);

  const handleData = () => {


    if (name.current.value !== "" && add.current.value !== "" && query.current.value !== "") {
      const finalData = {
        name: name.current.value,
        address: add.current.value,
        query: query.current.value,
      }

      setData({...Data,finalData});
      // console.log(Data);

      localStorage.setItem("items", JSON.stringify(Data))
    }
    else {
      alert("All inputs Required ")
    }
  }
  console.log(Data);
  return (
    <>
      <div>
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
      <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
        {/* {
          Data.map((item) => {
            <div className="Data">
              <center style={{ textAlign: "center", border: "2px solid", width: "400px", padding: "10px" }}>
                <h1>Details</h1>
                <h5>Name : {item.name}</h5>
                <h5>Address : {item.address}</h5>
                <h5>Query : {item.query}</h5>
                <button className='btn btn-primary btn-block mb-4' style={{ marginTop: "30px" }}> Edit Data</button>
              </center>
            </div>
          })
        } */}
      </div>
    </>
  )
}

export default Main;