import React from "react";
import { Router } from "@reach/router";
import NavBar from "./NavBar";
import Highschoollistings from "./Highschoollistings";
import StudentDetails from "./StudentDetails";
import Admin from "./Admin";
import "./App.css";


function App() {
  return (
    <div className="ss-app">


      <header className="ss-header">
        <NavBar />
      </header>

      <main className="ss-main">
        <Router>
            <Highschoollistings path="/" />
            <StudentDetails path="/school" />
            <Admin path="/admin" />



        </Router>

      </main>

    </div>
  );
}

export default App;
