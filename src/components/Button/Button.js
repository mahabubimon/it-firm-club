import React from 'react';

const Button = (props) => {
    return (
        <button className="btn btn-primary"
        onClick={()=> props.join(props.company)}
        ><i className="fas fa-user-friends text-info"></i> Join IT Pro Club</button>
    );
};

export default Button;