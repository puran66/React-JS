import React from 'react'
import { DELETE_DATA_PROGRESS, PRODUCT_DATA_PROGRESS } from '../../Redux-saga/Admin/action/action'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Products = () => {

  const ProductData = useSelector((state) => state.productReducer.products)

  console.log(ProductData);

  const handleDelete = async (data) => {
    await dispatch({ type: DELETE_DATA_PROGRESS, payload: data })
    await dispatch({ type: PRODUCT_DATA_PROGRESS })
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: PRODUCT_DATA_PROGRESS })
  }, [])
  return (
    <div>
      <center>
        <h1>Products</h1>
        <div class="container" style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "50px" }}>
          {ProductData.map((item) => {
            return (
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://rukminim2.flixcart.com/image/832/832/shoe/g/t/q/black-feather-green-lb487-campus-9-original-imadjjgddquhahqu.jpeg?q=70" class="card-img-top" alt="products" style={{ padding: "15px" }} />
                <div class="card-body">
                  <h5 class="card-title">{item.name}</h5>
                  <p class="card-text">{item.price}</p>
                  <button className='btn btn-primary' style={{ marginRight: "10px" }} onClick={() => handleDelete(item)}>Delete</button>
                  <button className='btn btn-primary' style={{ marginRight: "10px" }}><Link to={`/View/${item.id}`} style={{ color: "white", textDecoration: "none" }}>View</Link></button>
                </div>
              </div>
            )
          })}
        </div>
      </center>
    </div>
  )
}

export default Products;
