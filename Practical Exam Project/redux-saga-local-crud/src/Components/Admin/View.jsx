import React, { useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const View = () => {

  const [showUpdate ,setShow ] = useState("none")
  const [newData , setNewData] = useState({})

  const { id } = useParams();


  const ProductData = useSelector((state) => state.productReducer.products)

  const ViewData = ProductData.filter((item) => item.id === id)
  console.log(ViewData, "from view");

  useEffect(() => {
    if (ViewData[0]) {
      setNewData(ViewData[0]);
      console.log("call effect",ViewData[0]);
    }
  }, []);

  const handleUpdate=()=>{
    setShow((pre)=> pre === "none" ? "block" : "none")
    console.log(ProductData);
  }

  const handleChange =(e)=>{
    console.log(newData);
    setNewData({...newData,[e.target.name]: e.target.value}); 
  }
  return (
    <div>
      <center>
        {
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://rukminim2.flixcart.com/image/832/832/shoe/g/t/q/black-feather-green-lb487-campus-9-original-imadjjgddquhahqu.jpeg?q=70" class="card-img-top" alt="products" style={{ padding: "15px" }} />
            <div class="card-body">
              <h5 class="card-title">{ViewData[0].name}</h5>
              <p class="card-text">{ViewData[0].price}</p>
              <button className='btn btn-primary' onClick={handleUpdate}>Update</button>
            </div>
          </div>
        }
      </center>
      {/* Update section */}
      <center>
        <form style={{width:"400px" ,display:showUpdate}}>
          <div class="mb-3">
            <label  class="form-label">Edit Name</label>
            <input type="text" class="form-control" value={ViewData[0].name} name='name' onChange={(e)=>handleChange(e)}/>
          </div>
          <div class="mb-3">
            <label  class="form-label">Edit Price</label>
            <input type="number" class="form-control" value={ViewData[0].price} name='price' onChange={(e)=>handleChange(e)}/>
          </div>
          <button type="submit" class="btn btn-primary">Update</button>
        </form>
      </center>
    </div>
  )
}

export default View;