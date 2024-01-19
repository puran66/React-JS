import React, { useEffect, useRef, useState } from "react";

const Home = () => {
  const productName = useRef();
  const productPrice = useRef();
  const availability = useRef();

  const [result, setresult] = useState();
  const [view, setview] = useState({});

  let index = 0;

  const arr = JSON.parse(localStorage.getItem("data")) || [];
  const selValue = JSON.parse(localStorage.getItem("cart")) || [];

  const handleSave = () => {
    const data = {
      productName: productName.current.value,
      productPrice: productPrice.current.value,
      availability: availability.current.value,
    };

    console.log(data);
    arr.push(data);

    localStorage.setItem("data", JSON.stringify(arr));

    setresult(arr);
  };

  const handledelete = (index) => {
    console.log(index);

    arr.splice(index, 1);

    console.log(arr);

    localStorage.setItem("data", JSON.stringify(arr));

    setresult(arr);
  };

  const handleView = (val, ind) => {
    index = ind;
    console.log(val);
    setview(val);
  };

  const handle = (e) => {
    setview({ ...view, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    console.log(view, "update");

    // arr.splice(index, 1, view);

    // console.log(arr);
  };

  const handlecart =(index)=>{
    const cartVal = result[index];

    selValue.push(cartVal);

    localStorage.setItem("cart",JSON.stringify(selValue));
  }

  useEffect(() => {
    // setresult(arr);
    // console.log("hello");
    setresult([...arr]);
  }, []);

  // console.log(result, "result");

  return (
    <>
      <center>
        <h1>New Products</h1>
      </center>
      <div>
        {/* <input
            type="text"
            name="fname"
            value={view.fname}
            onChange={(e) => handle(e)}
          />
          <input
            type="text"
            name="lname"
            value={view.lname}
            onChange={(e) => handle(e)}
          />
          <input
            type="number"
            name="age"
            value={view.age}
            onChange={(e) => handle(e)}
          />
          <button onClick={handleUpdate}>update</button> */}

        {/* <input type="text" name="productName" ref={productName} />
        <input type="text" name="productPrice" ref={productPrice} />
        <input type="text" name="availability" ref={availability} />
        <button onClick={handleSave}>Save</button> */}

        <div style={{display:"flex", flexWrap:"wrap" ,justifyContent:"center"}}>
        {result?.map((val, ind) => {
          return (
            <>
              <div class="card" style={{width: "18rem",margin:"10px"}}>
                  <div class="card-body">
                    <h5 class="card-title">Product : {val.productName}</h5>
                    <p class="card-text">Price : {val.productPrice}</p>
                    <a href="#" class="btn btn-primary" onClick={()=>handlecart(ind)}>Add To Card</a>
                  </div>
              </div>
            </>
          );
        })}
        </div>
      </div>
    </>
  );
};

export default Home;
