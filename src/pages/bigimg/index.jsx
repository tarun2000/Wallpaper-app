import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from "../../components/loader";
import fetch from "node-fetch";
import { useEffect, useState } from "react";
const BigImg = () => {

    let {id}  = useParams();

    let [imgData, setImgData] = useState(null);

    let fetchImageData = async () =>{
        let res = await fetch(`https://api.pexels.com/v1/photos/${id}` , {
            headers : {
                'Authorization' : "563492ad6f91700001000001a0f1c31a0b5346eb9989eac4558012a8"
            }
        })

        let data = await res.json()

        setImgData(data)
        

    }
    
    useEffect(() =>{
        fetchImageData()
// eslint-disable-next-line
    } , [])

    
    return ( 
         <div>
            {imgData === null ? (<Loader/>) : (
              <div>
                    <button style={{
                        backgroundColor : 'black',
                        color : 'white',
                        padding : '7px 30px',
                        marginLeft : '20px',
                        borderRadius : '15px'
                    }}>
                        Back

                    </button>
                    

                   
                     <a href= {imgData.src.original} style={{ 
                      backgroundColor : 'black',
                       color : 'white',
                        padding : '7px 30px',
                        marginLeft : '20px',
                        borderRadius : '15px',
                        textDecoration : 'none'
                    }} download>download</a>

                

                </div> 
              )}  
         </div>
        
     );
};
 
export default BigImg;
