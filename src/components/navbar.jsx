import React from 'react';
import { useEffect, useState } from "react";
const Navbar = ({fetchData}) => {

    let [srch , setSrch] = useState("")



    return ( 
        <nav style={{
            width :'100%',
            boxShadow : '3px 3px 15px #ddd',
            backgroundColor : 'gray'
        }}>
            <div style={{
                padding : '10px 30px',
                fontSize : '16pt',
                display : 'flex',
                justifyContent : 'space-between',
                alignItems : 'center'
            }}>
                Tarun

                <div>
                    <input style={{
                        fontSize : '15pt',
                        borderRadius : '10px',
                        border : '10px',
                        

                    }} type="text" onChange={(e) =>{
                        setSrch(e.target.value)

                    }}/>
                    <button style={{
                        backgroundColor : 'black',
                        color : 'white',
                        padding : '7px 30px',
                        marginLeft : '20px',
                        borderRadius : '15px',
                        border : '10px'
                    }} onClick={() =>{
                        fetchData(srch)
                    }}>Search</button>
                </div>
            </div>
        </nav>
     );
} 
 
export default Navbar;
