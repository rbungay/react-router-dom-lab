import "./App.css";
import { NavBar } from "./components/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

const initialState = [
  { _id: 1, boxholder: "Alex", boxSize: "Small" },
  { _id: 2, boxholder: "Bob", boxSize: "Medium" },
  { _id: 3, boxholder: "Marley", boxSize: "Small" },
  { _id: 4, boxholder: "Superman", boxSize: "Large" },
  { _id: 5, boxholder: "Widow", boxSize: "Medium" },
];

const App = () => {
  const [mailboxes, setMailboxes] = useState(initialState);

  const addBox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
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
        <Route
          path="/mailboxes/:mailboxId"
          element={<h2>This will be for the specific mailbox later. </h2>}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
