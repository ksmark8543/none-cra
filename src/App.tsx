import React from "react";
// import { Layout } from "./lib";
import { Layout as LL } from "react-danang-test";

const App = () => {
  return (
    <div className="text-lg">
      A
      <LL.MenuGroup name="fsdjiofsdjio">
        <LL.Menu name="menu" />
        <LL.Menu name="menu" />
      </LL.MenuGroup>
      {/* <MenuGroup name="menugroup" />B */}
    </div>
  );
};

export default App;
