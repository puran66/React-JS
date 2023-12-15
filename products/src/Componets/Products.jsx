import React, { useState } from 'react';
import ProductData from './ProductData';
import './Home.css';

const Products = () => {
    const [currentData, setCurrentData] = useState(ProductData);
    const [currentPrice, setCurrentPrice] = useState(0);

    const AvailProducts = currentData.filter((item) => {
        return item.availability === true;
    });

    const priceHandle = (e) => {
        const newprice = e.target.value;
        console.log("new price", newprice);
        setCurrentPrice(newprice);

        // Filter products based on the selected price
        const filteredProducts = ProductData.filter((item) => item.price <= newprice);
        setCurrentData(filteredProducts);
    };

    return (
        <>
            <center><h1 style={{ marginTop: "30px" }}>Available Products</h1></center>
            <div className="container">
                <center>
                    <div className="searchBar" style={{ marginTop: "30px" }}>
                        <h2>Select Price Range</h2>
                        <input type="range" min="0" max="999" value={currentPrice} onChange={priceHandle} />
                        <h3>{`Price : ${currentPrice}$`}</h3>
                    </div>
                </center>
                <div className="Products" style={{ marginTop: "30px" }}>
                    {AvailProducts.map((item) => {
                        return (
                            <div className="card" style={{ width: "18rem" }} key={item.productName}>
                                <div className="card-body">
                                    <h3 className="card-title">{`Product Name : ${item.productName}`}</h3>
                                    <h5 className="card-text">{`Price : ${item.price}$`}</h5>
                                    <p>{`Product Description : ${item.description}`}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Products;
