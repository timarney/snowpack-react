import React from "react";
import ReactDOM from "react-dom";

// importing from ./components/App gets blocked
// Firefox and Chrome
// 👇👇👇👇👇
// Loading module from “http://localhost:8080/lib/components/App” was blocked because of a disallowed MIME type (“text/html”).

import { App } from "./components/App";

/*
const App = () => {
  return <div>Hello from React</div>;
};
*/

ReactDOM.render(<App />, document.getElementById("root"));
