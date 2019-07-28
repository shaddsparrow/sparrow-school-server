import React from "react";
import { Router } from "@reach/router";
import NavBar from "./NavBar";
import Highschoollistings from "./Highschoollistings";
import Admin from "./Admin";
import "./App.css";
import StudentDetails from "./StudentDetails";

// const parent = [
//   {
//     "id": 1,
//     "namee": "Alliance",
//     "form": "two west",
//     "reg_id": "scce0897"
//   },
//   {
//     "id": 2,
//     "namee": "Starehe",
//     "form": "two north",
//     "reg_id": "scce9854"
//   },
//   {
//     "id": 4,
//     "namee": "chavakali",
//     "form": "three west",
//     "reg_id": "scee0987"
//   },
//   {
//     "id": 5,
//     "namee": "chavakali",
//     "form": "three west",
//     "reg_id": "scee0987"
//   }
// ]








function App() {
  return (
    <div className="ss-app">


      <header className="ss-header">
        <NavBar />
      </header>

      <main className="ss-main">
        {/* <Highschoollistings  /> */}
        <Router>
            <Highschoollistings path="/" />
            <StudentDetails path="/school/:studentId" />
            <Admin path="/admin" />



        </Router>

      </main>

    </div>
  );
}

export default App;
