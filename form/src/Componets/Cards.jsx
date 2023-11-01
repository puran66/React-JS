import { Data } from './Data';
import { useState, useEffect } from 'react';
import './Cards.css';

const Cards = () => {
    const [Deatail, setDeatail] = useState([]);
    const [Val, setVal] = useState({})
    const [id,setId] = useState(11)

    useEffect(() => {
        setDeatail(Data);
    }, [])

    const handle = (e) => {
        setVal({ ...Val, [e.target.name]: e.target.value });
        console.log(Val);
    }

    const handleButton =(e)=>{
        e.preventDefault();
        const newCard = {id :id ,...Val}
        setDeatail([...Data,newCard]);
        setId(id + 1);
        setVal({ Title: '', Author: '' });
    }

    const deleteCard =(Id)=>{
            const updatedCards = Deatail.filter((card)=>card.id !== Id);
            setDeatail(updatedCards);
            console.log(updatedCards);
    }

    return (
        <>
            <form className="form">
                <div class="form-group">
                    <label for="exampleInputEmail1">Title</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" name="Title" aria-describedby="emailHelp" placeholder="Enter Title" onChange={handle} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Author</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name="Author" placeholder="Author" onChange={handle} />
                </div>
                <button type="submit" class="btn btn-primary" onClick={handleButton}>Submit</button>
            </form>

            <div className="card-container">
                {Deatail.map((item) => (
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Title : {item.Title}</h5>
                            <p className="card-text">Id : {item.id}</p>
                            <p className="card-text">Author : {item.Author}</p>
                            <button type="submit" class="btn btn-primary" onClick={()=>{deleteCard(item.id)}}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Cards;