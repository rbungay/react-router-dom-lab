import "./App.css";
import { NavBar } from "./components/Navbar.jsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>My mailboxes</h1>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <h2>This takes us to home page component. Will change after </h2>
          }
        ></Route>
        <Route
          path="/mailboxes"
          element={
            <h2>This will be for the mailboxlist. import will come later </h2>
          }
        ></Route>
        <Route
          path="/new-mailbox"
          element={
            <h2>This will be for the newMailbox. import will come later </h2>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
