import React from 'react';
import { useHistory } from 'react-router-dom';

const ImageTile = ({imageSrc , imgId}) => {

    let history = useHistory();

    return ( 
        <div style={{
            backgroundImage : `url("${imageSrc}")`,
            backgroundSize : 'cover',
            backgroundPosition : 'center',
            width : '330px',
            height : '230px',
            margin : '20px',
            boxShadow : '1px 1px 15px #ddd',
            borderRadius : '20px'
            
        }}
        
        onClick = {() =>{
            history.push(`/bigimg/${imgId}`);
        }}
        

        ></div>
     );
};
 
export default ImageTile;