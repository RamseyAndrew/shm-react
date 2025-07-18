import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ArrayData from "./DisplayData/ArrayData";

import PrimitiveData from "./Props/PrimitiveData";

import MiniProject from "./MiniProject";

import "./css.css";

import Buttons from "./Hooks/Events/Btns";
import Form from "./Hooks/Events/Form"

import SimpleState from "./Hooks/State/SimpleState";
import SimpleState2 from "./Hooks/State/SimpleState2";
import FormState from "./Hooks/State/FormState";
import  SimpleEffect  from "./Effects/Effects"
import Navigation from "./Routing/ManualRoutes/Navigation";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SimpleState/>
    <SimpleState2/>
  <FormState/>
  <SimpleEffect/>
  <Navigation/>
  </StrictMode>
);
