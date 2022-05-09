import React, { useEffect } from "react";

import Header from "./components/Header";
import FilterSection from "./components/Filter";
import List from "./components/List";

import { useDispatch } from "react-redux";
import { fetchCountryData } from "./store/fetch-actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountryData());
  }, [dispatch]);

  return (
    <>
      <Header />
      <FilterSection />
      <List />
    </>
  );
}

export default App;
