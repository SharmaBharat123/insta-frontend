import React,{useState, useEffect} from "react";
import axios from 'axios'
// import data from '../../mock-data/data.json'
import Card from "../card/card";


const LandingPage = () => {
    const [data, setData] = useState([])

    useEffect( () => {
        axios.get("https://insta-clone-clone.onrender.com/api/v1/posts").then((res)=>{
            //console.log(res.data.post);
            setData(res.data.post)
            
        })
        
    }, [])
    
    
    return (
        <div className="post-container">
            {
                data.map((post, index) => {
                    return (
                        <Card post={post} key={index} />
                    )
                })
            }

        </div>
    )
}

export default LandingPage;