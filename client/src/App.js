import React, { useState } from "react";

import SearchAppBar from "./components/AppBar.js";
import AdvancedGridList from "./components/GridList";

function App() {
  const [showSaved, setshowSaved] = useState(false);
  const [query, setQuery] = useState("molecular biology");

  return (
    <div>
      <SearchAppBar
        setshowSaved={setshowSaved}
        setQuery={setQuery}
        setshowSaved={setshowSaved}
      />
      <AdvancedGridList showSaved={showSaved} query={query} />
    </div>
  );
}

export default App;
