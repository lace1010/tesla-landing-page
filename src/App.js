import React from "react";
import Header from "./Header";
import Section from "./Section";
import Data from "./data";

function App() {
  console.log(Data);
  return (
    <div>
      <Header />
      {Data.map((item) => (
        <Section title={item.title} image={item.img} key={item.id} />
      ))}
    </div>
  );
}

export default App;
