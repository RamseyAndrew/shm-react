import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ArrayData from "./DisplayData/ArrayData";

import PrimitiveData from "./Props/PrimitiveData";

import MiniProject from "./MiniProject";

//import "./css.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Buttons from "./Hooks/Events/Btns";
import Form from "./Hooks/Events/Form"

import SimpleState from "./Hooks/State/SimpleState";
import SimpleState2 from "./Hooks/State/SimpleState2";
import FormState from "./Hooks/State/FormState";
import  SimpleEffect  from "./Effects/Effects"
import Navigation from "./Routing/ManualRoutes/Navigation";
import About from "./Routing/ManualRoutes/ABout";
import Contact from "./Routing/ManualRoutes/Contact";
import Home from "./Routing/ManualRoutes/Home";
import ManualRoute from "./Routing/ManualRoutes";
import Dashboard from "./Routing/ReactRouter/DashBoard";
import Login from "./Routing/ReactRouter/Login";
import ReactRouter from "./Routing/ReactRouter";
createRoot(document.getElementById("root")).render(
  <StrictMode>
  <ReactRouter/>
  </StrictMode>
);
