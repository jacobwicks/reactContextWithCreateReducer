import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { PagesProvider } from "./services/PagesContext";
import Page from "./components/Page";

function App() {
  return (
    <div className="App">
      <PagesProvider>
        <header className="App-header">
          React Context with Redux Toolkit createReducer
        </header>
        <Page />
        <Sidebar />
      </PagesProvider>
    </div>
  );
}

export default App;
