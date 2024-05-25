import * as React from "react";
import { createRoot } from "react-dom/client";
import Main from "./components/Main.jsx";
import "./index.css";

import { useContext } from "react";

const root = createRoot(document.body);

root.render(<App />);

export const ColorContext = React.createContext({
  color: "#121212",
  setColor: () => {},
});

function App() {
  const [color, setColor] = React.useState("#0ad4ed");

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "100vw"}}>
        <h1 style={{color: color}}>Hello from React {"<3"} Electron!</h1>
        <Main />
      </div>
    </ColorContext.Provider>
  );
}
