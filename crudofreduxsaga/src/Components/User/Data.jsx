import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_PRODUCT_PROGRESS } from "../../Redux-Saga/User/action/action";

const Data =()=>{

  const Dispatch = useDispatch()

  useEffect(()=>{
    Dispatch({type : GET_PRODUCT_PROGRESS})
  })
  return(
    <h1>Data</h1>
  )
}

export default Data;