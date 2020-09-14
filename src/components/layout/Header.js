import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div>
            <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link to="/" style={textStyle}> Home</Link> | 
            <Link to="/about" style={textStyle}> About </Link>
        </header>
        </div>
    )
}

const headerStyle = {
    background :'#333',
    color :'White',
    textAlign :'center',
    padding : "5px"
}
const textStyle ={
    color:"white",
    textDecoration :'none'
}

export default Header;