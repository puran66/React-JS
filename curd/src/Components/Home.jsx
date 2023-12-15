import userEvent from "@testing-library/user-event";
import { useRef, useState } from "react"
import { Url, postData } from "../ApiLinks";
import { post_data } from "../Api/API";

export const Home = () => {

    const title = useRef();
    const about = useRef();

    const Update =()=>{
        const data = {
            title:title.current.value,
            about:about.current.value
        }

        post_data(Url,postData,data).then((res)=>{
            console.log(res);
        })
        console.log(data);
    }

    return (
        <>
            <div style={{width:"400px", textAlign:"center" , border:"2px solid",padding:"20px" , margin:"30px"}}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Movie Title</label>
                    <br />
                    <input type="text" ref={title}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">About The Movie</label>
                    <br />
                    <input type="text" ref={about}/>
                </div>
                <button type="submit" class="btn btn-primary" onClick={Update}>Add Details</button>
            </div>
        </>
    )
}