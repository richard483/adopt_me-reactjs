// import React from "react";  <- this no need to use anymore because we used jsx to export element and we have configured the eslint
import { render } from "react-dom";
import SearchParam from "./SearchParams";
import { StrictMode, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("darkBlue");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <header>
            <Link to="/"> Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParam />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     [
//       React.createElement("h1", { id: "brand" }, "Adopt Me!"),
//       React.createElement(Pet, {
//         name: "Luna",
//         animal: "Dog",
//         breed: "Havanese",
//       }),
//       React.createElement(Pet, {
//         name: "Pepper",
//         animal: "Bird",
//         breed: "Cocktail",
//       }),
//       React.createElement(Pet, {
//         name: "Doink",
//         animal: "Cat",
//         breed: "Mix",
//       }),
//     ]
//     // the "{}" can be replaced with 'null'
//   );
// };

render(<App />, document.getElementById("root"));
