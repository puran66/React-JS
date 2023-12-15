import React, { useEffect } from 'react'
import ProductData from './ProductData'
import { useState } from 'react';
import './Home.css'

const Home = () => {

    const { currentData, NewDataSet } = useState(ProductData);

    const AvailProducts = ProductData.filter((item) => {
        return item.availability === true;
    })

    return (
        <><center><h1>Available Products</h1></center>
        <div className="Products">
            {AvailProducts.map((item) => {
                // console.log(AvailProducts)
                return (
                    <div class="card" style={{ width: "18rem" }}>
                        {/* <img class="card-img-top" src="" alt="Card image cap" /> */}
                        <div class="card-body">
                            <h3 class="card-title">{`Product Name : ${item.productName}`}</h3>
                            <h5 class="card-text">{`Price : ${item.price}$`}</h5>
                            <p>{`Product Description : ${item.description}`}</p>
                        </div>
                    </div>
                )
            })}
        </div></>
    )
}

export default Home