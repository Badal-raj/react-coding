import { useState } from 'react';
import './App.css';

import { TabForm } from './TabFile/TabForm';
import { Pagiantion } from './Pagination/Pagination';

function App() {
  const [bgColor, setBgColor] = useState("No Effect")
  return (
    <>
    {/* <div className="tab-form-container" style={{ background: `${bgColor === "Light" ? "aliceblue" : `${bgColor === "Dark" ? "darkseagreen" : "white"}`}` }}>
      <TabForm 
       setThemeColor = {setBgColor}
      />
    </div> */}
    <Pagiantion />
    </>
  );
}

export default App;
