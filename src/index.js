import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from "./reportWebVitals";
//import Tasks from "./components/Reacttask";
//import "./index.css"
//import Parent from "./components/contxt/parent";
import Circle from "./components/randomcir/Randomcir";
//import Page from "./components/Rtask/Page";
//import ToDo from "./components/contxt/child1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
{/* <Tasks/> */}
<Circle/>
{/* <Page/> */}
{/* <ToDo/> */}

</React.StrictMode>);

reportWebVitals();
