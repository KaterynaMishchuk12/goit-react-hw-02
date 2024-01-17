import { useState, useEffect } from "react";
import { Description } from "./Description/Description";
import { Options } from "./Options/Options";
import { Feedback } from "./Feedback/Feedback";
import "./App.css";

export function App() {
  const [rates, setRates] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  //   (() => {
  //   const savedClicks = window.localStorage.getItem("saved-clicks");
  //   if (savedClicks !== null) {
  //     return savedClicks;
  //   }
  //   return 0;
  // });

  // useEffect(() => {
  //   window.localStorage.setItem("saved-clicks", clicks);
  // }, [clicks]);

  return (
    <>
      <Description
        title="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options rates={rates} setRates={setRates} />
      <Feedback rates={rates} />
    </>
  );
}
