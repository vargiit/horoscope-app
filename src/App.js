import React from "react";
import "./App.css";
import Form from "./Form";
import DisplayBox from "./DisplayBox";
import { useState } from "react";
function App() {
  const [sign, setSign] = useState("");
  const [userLog, setUserLog] = useState("");
  function getUserHoroscope(horoscopeLog) {
    setUserLog(horoscopeLog);

    const URL = `https://aztro.sameerkumar.website/?sign=${horoscopeLog.sign}&day=${horoscopeLog.day}`;
    fetch(URL, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        setSign(data);
      });
  }
  return (
    <div className="App">
      <Form getUserHoroscope={getUserHoroscope} />
      {sign && <DisplayBox sign={sign} userInfo={userLog} />}
    </div>
  );
}

export default App;
