import React from 'react';

const Loader = () => {
    return ( 
        <div style={{
            width : '100%',
            height : '100vh',
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center'
        }}>
            <img src="/images/loader.gif" alt="loading" width={100} height={100}/>
        </div>
     );
}
 
export default Loader;