import React, { useState } from 'react'
import { Data } from '../Data/Data'

const Home = () => {
  const [searchVal ,setVal] = useState('')

  // console.log(searchVal);
  return (
    <>
      <div className='Search'>
        <div class="d-flex" style={{ width: "800px", margin: "auto", marginTop: "50px" }} role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setVal(e.target.value)} />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </div>
      </div>
      <div style={{ width: "80%", margin: "auto" }}>
        <table className="table table-primary table-bordered mt-5">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">E-Mail</th>
            </tr>
          </thead>
          <tbody>
            {
              Data.filter((item)=>{
                return(
                  searchVal.toLocaleLowerCase === "" ? item : item.first_name.toLocaleLowerCase().includes(searchVal)
                )
              })  .map((item) => {
                return (
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Home