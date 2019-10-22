import React, { Component } from 'react';

// const Name = ({main, sub}) => {
//     const style = {
//         backgroundColor: "powderblue",
//         color: "white",
//         fontSize: "30px"
//     }
//     return(
//         <div>
//             <div style={style}>{sub}</div>
//             <div style={style}>{main}</div>
//         </div>
//     );
// }

const Tag = ({json}) => {
    const style = {
        backgroundColor: "powderblue",
        color: "white",
        fontSize: "30px"
    }
    return(
        <div>
            <div style={style}>{json.main}</div>
            <div style={style}>{json.sub}</div>
        </div>
    );
}

export default Tag;