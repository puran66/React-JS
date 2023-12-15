import axios from "axios";

export const get_data = (Url, endpoint) => {
    return (
        axios.get(Url + endpoint).then((res) => {
            return res.data;
        }).catch((err) => {
            console.error('Error', err)
        })
    )
}

export const post_data =(Url,endpoint,data)=>{
    return(
        axios.post(Url+endpoint,data).then((res)=>{
            return res.data
        }).catch((err)=>{
            console.log("Error",err);
        })
    )
}

export const delete_data =(Url,endpoint,id)=>{
    return(
        axios.delete(Url+endpoint+id).catch((err)=>{
            console.log("Error Deleting Data");
        })
    )
}