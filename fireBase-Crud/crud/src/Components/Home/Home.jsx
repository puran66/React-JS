import React, { useEffect, useRef, useState } from 'react'
import { db } from '../../FireBase/FireBase';
import { collection, getDocs ,addDoc ,updateDoc ,doc ,deleteDoc} from 'firebase/firestore'

const Home = () => {
  const [users, setUsers] = useState([]);
  const [updateData ,setUpdate ] = useState({})
  const name = useRef();
  const email = useRef();
  const age = useRef();

  const userCollection = collection(db, "users");

  useEffect(() => {
    const get_data = async () => {
      const data = await getDocs(userCollection)
      console.log(data,"from collection");

      setUsers(data.docs.map((doc)=> ({...doc.data(),id:doc.id})))

      console.log(users);
    }

    get_data()
  },[])

  const handleSubmit =()=>{
    if (name.current.value === "" || email.current.value===""||age.current.value ===""){
      alert("Please fill out all fields.")
    }
    else{
      const addData ={
        name : name.current.value,
        age : age.current.value,
        email :email.current.value
      }

      addDoc(userCollection,addData);

     }
  }

  const handleUpdate =(item)=>{
    const update = {
      id:item.id,
      name : item.name,
      age : item.age,
      email :item.email
    }
    setUpdate(update)
  }

  const handleChange =(e)=>{
    setUpdate({...updateData,[e.target.name]:e.target.value})
  }
  const finalUpdate = async()=>{
    const userDoc = doc(db,"users",updateData.id)

    console.log(userDoc);

    await updateDoc(userDoc,updateData)
  }

  const handleDelete = async(id)=>{
    const userDoc = doc(db,"users",id);

    await deleteDoc(userDoc)
  }

  return (
    <>
              {/* Add field */}
    <div>
      <input type="text" placeholder='enter name'  ref={name}/>
      <input type="text" placeholder='enter age'  ref={age}/>
      <input type="text" placeholder='enter email' ref={email}/>
      <br/>
              {/* update Field  */}
      <button onClick={handleSubmit}>Add Data</button>
    </div>
    <div>
      <input type="text" placeholder='enter name' name="name" value={updateData.name} ref={name} onChange={(e)=>handleChange(e)}/>
      <input type="text" placeholder='enter age' name="age" value={updateData.age} ref={age} onChange={(e)=>handleChange(e)}/>
      <input type="text" placeholder='enter email' name="email" value={updateData.email} ref={email} onChange={(e)=>handleChange(e)}/>
      <br/>

      <button onClick={finalUpdate}>Submit Update</button>
    </div>
    <div>
      <center>
        {
          users.map((item)=>{
            return(
              <>
              <h2>id : {item.id}</h2>
              <h2>name : {item.name}</h2>
              <h2>age : {item.age}</h2>
              <h2>email : {item.email}</h2>
              <button onClick={()=>handleUpdate(item)}>
                Update
              </button>
              <button onClick={()=>handleDelete(item.id)}>
                Delete
              </button>
              </>
            )
          })
        }
      </center>
    </div>
    </>
  )
}

export default Home