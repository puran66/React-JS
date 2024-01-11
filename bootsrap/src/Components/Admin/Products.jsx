import React from 'react';

const Products = () => {
  return (
    <>
      <div>
        <center>
          <h1>Products</h1>
        </center>
      </div>
      <div className="products" style={{display : "flex" , gap : "30px", justifyContent :"center" , marginTop : "50px"}}>
        <div className="card" style={{ width: '18rem' }}>
          <img
            src=" https://th.bing.com/th/id/OIP.HAgI2q7-Md8oDcnW87CGywHaE8?rs=1&pid=ImgDetMain"
            className="card-img-top"
            alt="watch"
          />
          <div className="card-body">
            <h5 className="card-title">Patek Philippe The most expensive watch </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <button className="btn btn-primary"style={{marginRight : "10px"}} >Edit</button>
            <button className="btn btn-primary">Remove</button>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img
            src=" https://th.bing.com/th/id/OIP.HAgI2q7-Md8oDcnW87CGywHaE8?rs=1&pid=ImgDetMain"
            className="card-img-top"
            alt="watch"
          />
          <div className="card-body">
            <h5 className="card-title">Patek Philippe The most expensive watch </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <button className="btn btn-primary"style={{marginRight : "10px"}} >Edit</button>
            <button className="btn btn-primary">Remove</button>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img
            src=" https://th.bing.com/th/id/OIP.HAgI2q7-Md8oDcnW87CGywHaE8?rs=1&pid=ImgDetMain"
            className="card-img-top"
            alt="watch"
          />
          <div className="card-body">
            <h5 className="card-title">Patek Philippe The most expensive watch </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <button className="btn btn-primary"style={{marginRight : "10px"}} >Edit</button>
            <button className="btn btn-primary">Remove</button>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img
            src=" https://th.bing.com/th/id/OIP.HAgI2q7-Md8oDcnW87CGywHaE8?rs=1&pid=ImgDetMain"
            className="card-img-top"
            alt="watch"
          />
          <div className="card-body">
            <h5 className="card-title">Patek Philippe The most expensive watch </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <button className="btn btn-primary"style={{marginRight : "10px"}} >Edit</button>
            <button className="btn btn-primary">Remove</button>
          </div>
        </div>
        {/* Repeat the above card structure for other cards */}
      </div>
    </>
  );
};

export default Products;
