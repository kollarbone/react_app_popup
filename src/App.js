import "./styles.css";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import ProfileContent from "./Components/ProfileContent/ProfileContent";
import MessagesContainer from "./Components/Messages/MessagesContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PeopleContainer from "./Components/People/PeopleContainer";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import ProductPage from "./Components/ProductPage/ProductPage";

export default function App(props) {
  const [theme, setTheme] = useState("light");
  const [cookies, setCookie] = useCookies(["theme"]);
  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    setCookie("theme", theme, { path: "/" });
  };

  document.body.style.backgroundColor =
    cookies.theme === "light" ? "white" : "black";

  return (
    <BrowserRouter>
      <div className="App">
        <Header
          switchTheme={switchTheme}
          store={props.store}
          theme={cookies.theme}
        />
        <NavBar theme={cookies.theme} />
        <div className="mainContent">
          <Routes>
            <Route
              path="/messages/*"
              element={
                <MessagesContainer theme={cookies.theme} store={props.store} />
              }
            />
            <Route
              path="/"
              element={
                <ProfileContent theme={cookies.theme} store={props.store} />
              }
            />
            <Route
              path="/profileContent/"
              element={
                <ProfileContent theme={cookies.theme} store={props.store} />
              }
            >
              <Route
                path="/profileContent/:profileID"
                element={
                  <ProfileContent theme={cookies.theme} store={props.store} />
                }
              />
            </Route>
            <Route
              path="/people/*"
              element={
                <PeopleContainer theme={cookies.theme} store={props.store} />
              }
            />
            <Route
              path="/products/*"
              element={
                <ProductPage theme={cookies.theme} store={props.store} />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
