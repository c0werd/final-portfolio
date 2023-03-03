import React from "react";
import {createRoot} from "react-dom/client";
import "./styles/index.css";

import Main from "./Main";

const root = createRoot(document.getElementById('root'));
root.render(<Main></Main>);
