import React from "react"
import { useState, useEffect, useRef } from "react"
import axios from 'axios'
import './API.css'

const API = () => {
    const [data, setData] = useState([])
    const [addData, addManage] = useState([{}])
    const [updateData, setUpdateData] = useState([{}])
    const [showUpdate, setShow] = useState({})
    const [hideUpdate, setHide] = useState({})
    const title = useRef()
    const author = useRef()

    useEffect(() => {
        //get data from api
        getData()
    }, [])

    const getData = () => {
        axios.get("http://localhost:3000/posts").then((res) => {
            console.log(res.data);

            setData(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    }

    const handledata = () => {
        const result = {
            title: title.current.value,
            author: author.current.value
        };
        // setData(result)
        axios.post("http://localhost:3000/posts ", result).then((res) => {
            console.log(res.data);

            setData([...data, res.data])
        }).catch((err)=>{
            console.log(err);
        })
    }
    const deleteData = (id) => {
        axios.delete(`http://localhost:3000/posts/${id}`).then(() => {
            setData(data.filter((e) => e.id !== id))
        }).catch((err)=>{
            console.log(err);
        })
    }

    const updateEditData = (id, ind) => {
        setShow({display: 'block'})
        setHide({display: 'none'})

        console.log(id, ind);

        const final = data[ind]
        setUpdateData(final)
        console.log(final);
    }

    const handleChange = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value })
        console.log(updateData);
    }

    const updateFinalData = () => {
        axios.patch(`http://localhost:3000/posts/${updateData.id}`, updateData).then((res) => {
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })

        setShow({display: 'none'});
        setHide({display: 'block'});
    }
    return (
        <>
            <div className="container">
                <div className="box" style={hideUpdate}>
                    <center>
                        <br /><br /><br />
                        <h1>Add Data</h1>
                        <br />
                        <input type="text" name="title" ref={title} placeholder="Enter Title" />
                        <br /><br />
                        <input type="text" name="author" ref={author} placeholder="Enter author" />
                        <br /><br />

                        <button onClick={handledata}>Add Data</button>
                        <br /><br />
                    </center>
                </div>
                <div className="box update" style={showUpdate}>
                    <center>
                        <br /><br /><br />
                        <h1>Update Data</h1>
                        <br />
                        <input type="text" name="title" onChange={handleChange} value={updateData.title} />
                        <br /><br />
                        <input type="text" name="author" onChange={handleChange} value={updateData.author} />
                        <br /><br />

                        <button onClick={updateFinalData}>Update Data</button>
                        <br /><br />
                    </center>
                </div>
                <div className="childs" style={hideUpdate}>
                    {
                        data.map((val, ind) => {
                            return (
                                <div key={ind} className="box-child">
                                    <h2>{val.id}</h2>
                                    <h1 >{val.title}</h1>
                                    <h2 >{val.author}</h2>
                                    <button onClick={() => { deleteData(val.id) }}>Delete</button>
                                    <button onClick={() => { updateEditData(val.id, ind) }}>Update</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default API;