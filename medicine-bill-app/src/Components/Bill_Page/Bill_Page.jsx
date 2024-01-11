import React from 'react'
import { useRef, useState } from 'react'

const Bill_Page = () => {
  const [hide, sethide] = useState("flex");
  const [Billhide, setBill] = useState("none");
  const [BillData, setData] = useState([])

  const medicine_name = useRef();
  const medicine_price = useRef();
  const medicine_quantity = useRef();
  const medicine_expiry = useRef();

  const handleBill = () => {
    const name = medicine_name.current.value;
    const price = medicine_price.current.value;
    const quantity = medicine_quantity.current.value;
    const expiry = medicine_expiry.current.value;

    if (name !== "" && price !== "" && quantity !== "" && expiry !== "") {
      const finalData = {
        medicine_name: name,
        medicine_price: price,
        medicine_quantity: quantity,
        medicine_expiry: expiry
      }

      setData(finalData);

      if (hide == "flex") {
        sethide("none");
        setBill("block");
      }
      else {
        sethide("flex");
        setBill("none");
      }
    }
    else {
      alert("All inputs Required ")
    }
  }

  console.log(BillData);
  return (
    <>
      <div className="showBill" style={{ display: Billhide }}>
        <div>
          <center>
            <h2>Your Bill</h2>
            <div>
              <h4>Medicine name : {BillData.medicine_name}</h4>
              <h4>Medicine price : {BillData.medicine_price}</h4>
              <h4>Medicine Quantity : {BillData.medicine_quantity}</h4>
              <h4>Medicine expiry : {BillData.medicine_expiry}</h4>
            </div>
            <h3>Total : {parseInt(BillData.medicine_price) * parseInt(BillData.medicine_quantity)}rs</h3>
          </center>
        </div>
      </div>
      <div style={{ display: hide, justifyContent: "center", marginTop: "100px" }}>
        <form style={{ width: '22rem' }}>
          {/* Medicine Name input */}
          <div data-mdb-input-init className="form-outline mb-4" style={{ display: "flex" }}>
            <h5>Medicine Name:</h5>
            <input type="text" id="form5Example1" className="form-control" style={{ marginLeft: "10px" }} ref={medicine_name} />
          </div>

          {/* Quantity input */}
          <div data-mdb-input-init className="form-outline mb-4" style={{ display: "flex" }}>
            <h5>Quantity:</h5>
            <input type="text" id="form5Example1" className="form-control" style={{ marginLeft: "10px" }} ref={medicine_price} />
          </div>

          {/* Price input */}
          <div data-mdb-input-init className="form-outline mb-4" style={{ display: "flex" }}>
            <h5>Price:</h5>
            <input type="text" id="form5Example1" className="form-control" style={{ marginLeft: "10px" }} ref={medicine_quantity} />
          </div>

          {/* Expiry input */}
          <div data-mdb-input-init className="form-outline mb-4" style={{ display: "flex" }}>
            <h5>Expiry Year:</h5>
            <input type="text" id="form5Example1" className="form-control" style={{ marginLeft: "10px" }} ref={medicine_expiry} />
          </div>

          {/* Submit button */}
          <center>
            <button
              data-mdb-ripple-init
              type="button"
              className="btn btn-primary btn-block mb-4"
              onClick={handleBill}
            >
              Generate Bill
            </button>
          </center>
        </form>
      </div>
    </>
  )
}

export default Bill_Page;