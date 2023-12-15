
import { useRef, useState } from "react"
import { post_data, get_data, delete_data, update_data } from "../Api/API";
import { Url, deleteData, getData, postData, putData } from "../ApiLinks";

export const Home = () => {

    const [Detail, setDetails] = useState([])
    const [updateData, setUpdate] = useState([]);
    const [showUpdate, setShowUpdate] = useState({ display: "none" })
    const [ind, setInd] = useState()
    const [show, sethide] = useState({ display: "none" })
    const firstName = useRef();
    const lastName = useRef();
    const age = useRef();

    const saveData = () => {
        const result = {
            firstname: firstName.current.value,
            lastName: lastName.current.value,
            age: age.current.value
        }

        post_data(Url, postData, result).then((res) => {
            console.log(res);

            // setDetails([...Detail,res])

            // console.log(Detail);
        })
    }

    const showDetail = () => {
        get_data(Url, getData).then((res) => {
            setDetails(res)
            console.log(Detail);
        })

        sethide((prevVal) => {
            return prevVal.display === "none" ? { display: "block" } : { display: "none" };
        });

    }

    const DeleteData = (id) => {
        console.log(id, "id");

        delete_data(Url, deleteData, id);
        console.log(Url, deleteData, id, "delete parameters");

        setDetails(Detail.filter((preVal) => preVal.id !== id));
    }

    const Update = (index) => {
        setUpdate(Detail[index]);

        setShowUpdate((preVal)=>{
            return preVal.display === "none" ? { display: "block" } : { display: "none" }
        })

        sethide({ display: "none" })

        setInd(index)
    }

    const finalUpdate = (id) => {
        update_data(Url, putData, updateData, id)

        setDetails(Detail.splice(ind, 1, updateData))
        console.log(Detail, "splice data");
    }

    const handleUpdate = (e) => {
        setUpdate({ ...updateData, [e.target.name]: e.target.value });

        console.log(updateData);
    }

    return (
        <>
            <center style={showUpdate.display=== "block" ? { display: "none" } : { display: "block" }}>
                <div style={{ width: "400px", textAlign: "center", border: "2px solid", padding: "20px", margin: "30px" }}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">First Name</label>
                        <br />
                        <input type="text" ref={firstName} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputLastName">Last Name</label>
                        <br />
                        <input type="text" ref={lastName} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputAge">Enter Age</label>
                        <br />
                        <input type="text" ref={age} />
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={saveData}>Add Details</button>
                </div>
            </center>

            {/* update data field */}

            <center style={showUpdate}>
                <div style={{ width: "400px", textAlign: "center", border: "2px solid", padding: "20px", margin: "30px" }}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">First Name</label>
                        <br />
                        <input type="text" value={updateData.firstname} name="firstname" onChange={handleUpdate} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputLastName">Last Name</label>
                        <br />
                        <input type="text" value={updateData.lastName} name="lastName" onChange={handleUpdate} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputAge">Enter Age</label>
                        <br />
                        <input type="text" value={updateData.age} name="age" onChange={handleUpdate} />
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={() => finalUpdate(updateData.id)}>Update Details</button>
                </div>
            </center>

            <center>
                <button type="submit" class="btn btn-primary" onClick={showDetail}>View Details</button>
            </center>

            <div style={show}>
                {
                    Detail.map((val, ind) => {
                        return (
                            <center>
                                <div class="card" style={{ width: "600px", margin: "20px" }}>
                                    <h5 class="card-header">Details</h5>
                                    <div class="card-body">
                                        <h5 class="card-title">{val.firstname}</h5>
                                        <p class="card-text">{val.lastName}</p>
                                        <p class="card-text">{val.age}</p>
                                        <a href="#" class="btn btn-primary" style={{ marginRight: "10px" }} onClick={() => Update(ind)}>Change</a>
                                        <a href="#" class="btn btn-primary" onClick={() => DeleteData(val.id)}>Delete</a>
                                    </div>
                                </div>
                            </center>
                        )
                    })
                }
            </div>
        </>
    )
}