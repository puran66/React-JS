import './HeroSection.css'
import { useState } from 'react'
export const Title = (props) => {
    return (
        <div className="title">
            <h1>{props.title}</h1>
        </div>
    )
}

export const Thought = (props) => {
    return (
        <div className="thought">
            <p>{props.thought}</p>
        </div>
    )
}

// export const Join = () => {
//     const [val,setVal] = useState('');
//     const [joiner ,setJoiner] = useState('');
//     const save =(e)=>{
//         setVal(e.target.value);
//     }
//     const submit =()=>{
//         setJoiner(`${val} Wellcome To Our Communinity! Thanks For Join 😊`);
//     }
//     return (
//         <>
//             <div className="join">
//                 <p>Join the developer community and share your thoughts!Click Below !</p>
//             </div>
//             <div className="name">
//                 <input type="text" className='input1' placeholder='Enter Your Name' value={val} onChange={save}/>
//             </div>
//             <div className="button">
//                 <button className="btn" onClick={submit}>Join Us</button>
//             </div>
//             <h3>{joiner}</h3>
//         </>
//     )
// }