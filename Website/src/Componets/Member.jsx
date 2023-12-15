import { Data } from "./Data"
import {useParams} from 'react-router-dom'
export const Member =()=>{

    const {role} = useParams();
    // console.log(roll);

    const Result = Data.filter((item)=>{
        return item.role == role;
    })
    
    return(
        <center>
            <h1 className="text-3xl font-bold">Member Details</h1>
            <img src={Result[0].imageLink} alt="Member" style={{width: "500px",borderRadius:"10px"}} />
            <h2>{Result[0].name}</h2>
            <h3>{Result[0].role}</h3>
        </center>
    )
}