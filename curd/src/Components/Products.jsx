import { useEffect, useRef, useState } from "react";
import React from 'react';
import { delete_data, get_data } from "../Api/API";
import { Url, deleteData, getData } from "../ApiLinks";

const Products = () => {
    const [Movies, setMovies] = useState([]);
    const [change,setChange] = useState([])

    useEffect(() => {
        // to get data from api //

        get_data(Url, getData).then((res) => {
            console.log("products", res);
            setMovies(res);
        })
    }, [])

    const Delete =(id,ind)=>{
        console.log("id and index",id,ind);
        delete_data(Url,deleteData,id);

        // setMovies(Movies.splice(ind,1))

        setMovies(Movies.filter((res)=>res.id !== id))
    }

    const saveChange =(ind)=>{
        setChange(Movies[ind]);
    }
    const updateChange =(e)=>{
        setMovies({...Movies,[e.target.name]:e.target.value});
    }
    return (
        <>
            <center>
                <h1>Latest Movies</h1>
            </center>
            <div style={{display:"flex",flexWrap:"wrap"}}>
                {
                    Movies.map((Val, Ind) => {
                        return (
                            <>
                                <div class="card" style={{width :"400px",padding:"10px",margin:"30px"}}>
                                    <div class="card-header">
                                        {Val.id}
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">{Val.title}</h5>
                                        <p class="card-text">{Val.about}</p>
                                        <a href="#" class="btn btn-primary" style={{marginRight:"5px"}} onClick={()=>Delete(Val.id,Ind)}>Delete</a>
                                        <a href="#" class="btn btn-primary" onClick={()=>saveChange(Ind)}>Change</a>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <div style={{width:"400px", textAlign:"center" , border:"2px solid",padding:"20px" , margin:"30px"}}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Movie Title</label>
                    <br />
                    <input type="text"  value={change.title} onChange={updateChange}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">About The Movie</label>
                    <br />
                    <input type="text" value={change.about} onChange={updateChange}/>
                </div>
                <button type="submit" class="btn btn-primary" >Change Details</button>
            </div>
        </>
    )
}

export default Products;