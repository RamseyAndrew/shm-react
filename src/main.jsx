import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ArrayData from "./DisplayData/ArrayData";

import PrimitiveData from "./Props/PrimitiveData";

import MiniProject from "./MiniProject";

import "./css.css";

import Buttons from "./Events/Btns";
import Form from "./Events/Form"

import SimpleState from "./Hooks/Hooks/State.jsx/SimpleState";
import SimpleState2 from "./Hooks/Hooks/State.jsx/SimpleState2";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SimpleState/>
    <SimpleState2/>
  </StrictMode>
);
