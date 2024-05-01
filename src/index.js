/*import React from "react";
import ReactDom from 'react-dom/client';
// console.log(React);
// console.log(ReactDom);
var root=ReactDom.createRoot(document.getElementById("root"));
console.log(root);

root.render(<div id="container"> this is a container </div>);
console.log(root);
*/
/*
//?case 2
import React from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById("root")).render(<h1>hello react developer</h1>)
*/

// import App  from "./App";
// import { createRoot } from "react-dom/client";

// createRoot(document.getElementById("root")).render(<App></App>)


//?====class based components ========
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(<App></App>) 
