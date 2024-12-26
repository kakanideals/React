import React from "react";

function NoJsx() {
    //  return <div>With JSX</div>;
    return React.createElement("div", null, React.createElement("h1", null, "Rendering Without JSX.."));
}

export default NoJsx;
