import "./App.css";
import React from "react";
import { Header } from "./Header/index.js";
import { Slogan } from "./Slogan/index.js";
import { RTEditor } from "./RTEditor/RTEditor";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./App.css";

function App() {
  return (
    <div className="bg-cream relative mx-4 mt-3 mb-0.5 rounded-t-lg w-full">
      <Header />
      <Slogan />
      <div className="mx-32 mb-60">
        <div className=" font-slogan text-text text-xl mb-4">
          <h4 className="text-shadow">Start your memory line...</h4>
        </div>
        <RTEditor />
      </div>
    </div>
  );
}

export default App;
