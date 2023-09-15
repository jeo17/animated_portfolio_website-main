import { react, createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const initialData = {
  myMode:
    localStorage.getItem("color-theme") === null
      ? "dark"
      : localStorage.getItem("color-theme") 

};
const reducer = (firstState, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...firstState, myMode: action.newValue };
    default:
      return firstState;
  }
};

export function ThemeProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);
  const changeMode = (newMode) => {
    dispatch({ type: "CHANGE_MODE", newValue: newMode });
  };
  return (
    <ThemeContexttt.Provider value={{ ...firstState, changeMode }}>
      {children}
    </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;
