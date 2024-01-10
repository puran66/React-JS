import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const View = () => {

  const { id } = useParams();

  const ProductData = useSelector((state) => state.productReducer.products)

  const ViewData = ProductData.filter((item) => item.id === id)
  console.log(ViewData, "from view");

  return (
    <div>
      <center>
        {
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://rukminim2.flixcart.com/image/832/832/shoe/g/t/q/black-feather-green-lb487-campus-9-original-imadjjgddquhahqu.jpeg?q=70" class="card-img-top" alt="products" style={{ padding: "15px" }} />
            <div class="card-body">
              <h5 class="card-title">{ViewData[0].name}</h5>
              <p class="card-text">{ViewData[0].price}</p>
              <button className='btn btn-primary'>Update</button>
            </div>
          </div>
        }
      </center>
    </div>
  )
}

export default View;