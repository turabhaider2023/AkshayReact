import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";

/* <div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div> */

const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        React.createElement("h1",{},"hello This is manish tag!")

))

const root =createRoot(document.getElementById("root"))
root.render(parent)