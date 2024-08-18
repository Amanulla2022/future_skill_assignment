import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import GetHelpCenterCards from "./components/GetHelpCenterCards";
import Search from "./components/Search";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };
  return (
    <>
      <Search onSearchChange={handleSearchChange} />
      <GetHelpCenterCards searchTerm={searchTerm} />
      <Footer />
    </>
  );
}

export default App;
