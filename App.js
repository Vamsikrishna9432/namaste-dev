import React from "react";
import  {createRoot} from "react-dom/client";

const Sample = () => {
    return (
        <>
        <h1 className="heading">Namaste Dev 🚀</h1>
        <p className="para">This is the namste react course</p>
        </>
    )
}


const App = () => {
    return (
        <Sample />
    )
}




const root = createRoot(document.getElementById("root"));
root.render(<App/>)