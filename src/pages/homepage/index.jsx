import React from 'react';
import Navbar from '../../components/navbar';
import fetch from 'node-fetch'
import Loader from '../../components/loader';
import { useEffect, useState } from "react";
import ImageTile from '../../components/imageTile';

const Homepage = () => {

    let [data, setData] = useState(null)

    let fetchData = async (keyword) => {

        let res = await fetch(`https://api.pexels.com/v1/search?query=${keyword}`, {
            headers: {
                'Authorization': '563492ad6f91700001000001a0f1c31a0b5346eb9989eac4558012a8'
            } 
        })
        
        let data = await res.json()
        

        setData(data)

    }

    useEffect(() => {
        fetchData("bird")

    }, [])

    return (
        <div>
            <Navbar fetchData={fetchData} />
            
            {data === null ? <Loader /> : (
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {data.photos.map(ele => {
                        return <ImageTile imageSrc={ele.src.medium} />
                    })}
                </div>
            )}
        </div>
    );
}

export default Homepage;
