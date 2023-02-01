import "./App.css";
import HomePage from "./components/home-page/HomePage";
import { Routes, Route } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import Layout from "./components/layout/Layout";
import Items from "./components/coffee-items/Items";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="shop" element={<Items />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
