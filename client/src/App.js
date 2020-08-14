import React, { useState } from "react";

import SearchAppBar from "./components/AppBar.js";
import AdvancedGridList from "./components/GridList";

import useGetAllBooks from "./hooks/useGetAllBooks";

function App() {
  const [showSaved, setshowSaved] = useState(true);

  return (
    <div>
      <SearchAppBar />
      <AdvancedGridList showSaved={showSaved} />
    </div>
  );
}

export default App;
