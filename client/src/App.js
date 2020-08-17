import React, { useState } from "react";

import SearchAppBar from "./components/AppBar.js";
import AdvancedGridList from "./components/GridList";

function App() {
  const [showSaved, setshowSaved] = useState(false);

  return (
    <div>
      <SearchAppBar setshowSaved={setshowSaved} />
      <AdvancedGridList showSaved={showSaved} />
    </div>
  );
}

export default App;
