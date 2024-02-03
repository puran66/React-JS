<<<<<<< HEAD
import React, { useRef, useState } from 'react'
import { ADD_TO_CART_PROGRESS, DELETE_DATA_PROGRESS, PRODUCT_DATA_PROGRESS, UPADTE_DATA_PROGRESS } from '../../Redux-saga/Admin/action/action'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Products = () => {

  const ProductData = useSelector((state) => state.productReducer.products)
  const CartProduct = useSelector((state) => state.productReducer.cart)
  const [updateData, setUpdate] = useState({})

  const product_name = useRef();
  const price = useRef();
  const description = useRef();
  const availability = useRef();

  console.log(ProductData);

  const handleDelete = async (data) => {
    await dispatch({ type: DELETE_DATA_PROGRESS, payload: data })

    await dispatch({ type: PRODUCT_DATA_PROGRESS })
  }

  const handleCart = async (id) => {
    await dispatch({ type: ADD_TO_CART_PROGRESS, payload: id })
  }

  const dispatch = useDispatch()

  useEffect(()=>{
    localStorage.setItem("products",JSON.stringify(CartProduct))
  },[handleCart])

  useEffect(() => {
    dispatch({ type: PRODUCT_DATA_PROGRESS })
  }, [])

  const FinalUpdate = async()=>{
    const update = {
      id:updateData.id,
      product_name : product_name.current.value,
      price : price.current.value,
      description : description.current.value,
      availability : availability.current.value,
    }
    await dispatch({ type: UPADTE_DATA_PROGRESS,payload: update})
  }
  return (
    <div>
      <div>
        <center>
          <h4>Name:{updateData.product_name}</h4>
          <input type="text" ref={product_name}  className='mb-2 '  placeholder="Enter Updated Product Name"/>
          <br/>
          <h4>Price:{updateData.product_name}</h4>
          <input type="text" ref={price} className='mb-2'  placeholder="Enter Updated Product Price"/>
          <br/>
          <h4>Description:{updateData.product_name}</h4>
          <input type="text" ref={description}  className='mb-2' placeholder="Enter Updated Product description"/>
          <br/>
          <h4>Availability:{updateData.product_name}</h4>
          <input type="text" ref={availability}  className='mb-2' placeholder="Enter Updated Product availability"/>
          <br/>
          <button className='btn btn-primary' onClick={FinalUpdate}>Sumbit Update</button>
        </center>
      </div>
      <center>
        <h1>Products</h1>
        <div class="container" style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "50px" }}>
          {ProductData.map((item,ind) => {
            return (
              <div className="card" style={{ width: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title">{item.product_name}</h5>
                <h5>{item.price}</h5>
                <p className="card-text">{item.description}</p>
                <button className='btn btn-primary m-1' onClick={()=>handleCart(item.id)}>Add To Card</button>
                <button className='btn btn-primary m-1' onClick={()=>handleDelete(item.id)}>Delete</button>
                <button className='btn btn-primary m-1' onClick={()=>setUpdate(item)}>Update</button>
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
=======
import React, { useRef, useState } from 'react'
import { ADD_TO_CART_PROGRESS, DELETE_DATA_PROGRESS, PRODUCT_DATA_PROGRESS, UPADTE_DATA_PROGRESS } from '../../Redux-saga/Admin/action/action'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Products = () => {

  const ProductData = useSelector((state) => state.productReducer.products)
  const CartProduct = useSelector((state) => state.productReducer.cart)
  const [updateData, setUpdate] = useState({})

  const product_name = useRef();
  const price = useRef();
  const description = useRef();
  const availability = useRef();

  console.log(ProductData);

  const handleDelete = async (data) => {
    await dispatch({ type: DELETE_DATA_PROGRESS, payload: data })

    await dispatch({ type: PRODUCT_DATA_PROGRESS })
  }

  const handleCart = async (id) => {
    await dispatch({ type: ADD_TO_CART_PROGRESS, payload: id })
  }

  const dispatch = useDispatch()

  useEffect(()=>{
    localStorage.setItem("products",JSON.stringify(CartProduct))
  },[handleCart])

  useEffect(() => {
    dispatch({ type: PRODUCT_DATA_PROGRESS })
  }, [])

  const FinalUpdate = async()=>{
    const update = {
      id:updateData.id,
      product_name : product_name.current.value,
      price : price.current.value,
      description : description.current.value,
      availability : availability.current.value,
    }
    await dispatch({ type: UPADTE_DATA_PROGRESS,payload: update})
  }
  return (
    <div>
      <div>
        <center>
          <h4>Name:{updateData.product_name}</h4>
          <input type="text" ref={product_name}  className='mb-2 '  placeholder="Enter Updated Product Name"/>
          <br/>
          <h4>Price:{updateData.product_name}</h4>
          <input type="text" ref={price} className='mb-2'  placeholder="Enter Updated Product Price"/>
          <br/>
          <h4>Description:{updateData.product_name}</h4>
          <input type="text" ref={description}  className='mb-2' placeholder="Enter Updated Product description"/>
          <br/>
          <h4>Availability:{updateData.product_name}</h4>
          <input type="text" ref={availability}  className='mb-2' placeholder="Enter Updated Product availability"/>
          <br/>
          <button className='btn btn-primary' onClick={FinalUpdate}>Sumbit Update</button>
        </center>
      </div>
      <center>
        <h1>Products</h1>
        <div class="container" style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "50px" }}>
          {ProductData.map((item,ind) => {
            return (
              <div className="card" style={{ width: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title">{item.product_name}</h5>
                <h5>{item.price}</h5>
                <p className="card-text">{item.description}</p>
                <button className='btn btn-primary m-1' onClick={()=>handleCart(item.id)}>Add To Card</button>
                <button className='btn btn-primary m-1' onClick={()=>handleDelete(item.id)}>Delete</button>
                <button className='btn btn-primary m-1' onClick={()=>setUpdate(item)}>Update</button>
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
>>>>>>> a7aef33c33fd54b379baeb90794b2e37b605ab15
