import React, { useState, useContext } from "react";
import "./index.css";
import { RootContext } from "../App";

const themes = {
  light: {
    id: 1,
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    id: 2,
    foreground: "#ffffff",
    background: "#222222",
  },
};

const dataContext = [
  {
    nama: "Nouvel Izza",
    nim: "21120118170001",
    kelompok: "22",
  },
  {
    nama: "Adzra Fatikha",
    nim: "21120119120032",
    kelompok: "22",
  },
  {
    nama: "Paquita Putri Ababill",
    nim: "21120119120030",
    kelompok: "22",
  },
  {
    nama: "David Eddy Putra Pratama",
    nim: "21120119130074",
    kelompok: "22",
  },
];

const ThemeContext = React.createContext(themes.light);

export default function Index() {
  const [theme, setTheme] = useState(themes.dark);
  const changeTheme = () => {
    if (theme.id === themes.light.id) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };

  return (
    <div>
      <RootContext.Consumer>
        {(value) => {
          value.isiData(dataContext);
        }}
      </RootContext.Consumer>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <div
          className="Main"
          style={{ background: theme.background, color: theme.foreground }}
        >
          <p className="Text">Theme by useContext</p>
          <p>KELOMPOKXX</p>
          <ThemedButton />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

function ThemedButton() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <button
      className="Button"
      style={{ background: theme.background, color: theme.foreground }}
      onClick={changeTheme}
    >
      i am styled by theme context!
    </button>
  );
}
