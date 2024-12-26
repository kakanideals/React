import React from "react";

function Wish(props) {
    console.log(props);
    return (
        <div>
            Name is {props.name} Known as {props.aka}
            {props.children && <p>{props.children}</p>}
        </div>
    );
}

export default Wish;
