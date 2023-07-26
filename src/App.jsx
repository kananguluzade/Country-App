import React, { useState } from "react";
import Countries from "./components/Countries";
import Search from "./components/Search";
import Sort from "./components/Sort";
import Header from "./components/Header";

function App() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(null);

  return (
    <div>
      <Header />
      <div className="content">
        <Search setSearch={setSearch} />
        <Sort setSort={setSort} />
      </div>
      <Countries search={search} sort={sort} />
    </div>
  );
}

export default App;
