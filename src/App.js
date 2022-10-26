import React from "react";
import MuiTabs from "./tabs";


const tabsData1 = ["Save For College", "Retirement Saving", "Save For Bike"];
const tabsData2 = ["Save For College", "Retirement Saving", "Save For Bike", "Legacy Saving", "Save For Poker", "Save For Money","Save For College", "Retirement Saving", "Save For Bike", "Legacy Saving", "Save For Poker", "Last"]
const App = () => {
  return (
    <>
      <MuiTabs tabsData={tabsData1}/>
      <MuiTabs tabsData={tabsData2}/>
    </>
  )
}

export default App;