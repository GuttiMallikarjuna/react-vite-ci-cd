import { useState } from "react";
import ExampleContext from "./exampleContext";


export const ExampleProvider = ({ children }) => {
  const [data, setData] = useState({
    name: "Apple",
    age: 5,
    email:"apple@example.com"
  });

  return (
    <ExampleContext.Provider value={{ data, setData }}>
      {children}
    </ExampleContext.Provider>
  );
};
