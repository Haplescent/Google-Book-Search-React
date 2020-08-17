import React, { useState } from "react";

import SearchAppBar from "./components/AppBar.js";
import AdvancedGridList from "./components/GridList";

function App() {
  const [showSaved, setshowSaved] = useState(true);
  const [query, setQuery] = useState("");

  return (
    <div>
      <SearchAppBar setQuery={setQuery} setshowSaved={setshowSaved} />
      <AdvancedGridList showSaved={showSaved} query={query} />
    </div>
  );
}

export default App;
