import { useState } from "react";
import ExampleContext from "./exampleContext";


export const ExampleProvider = ({ children }) => {
  const [data, setData] = useState({
    name: "Apple",
    age: 5,
    email:"apple@example.com"
  });

  // 🔹 Contact data (GLOBAL)
  const [contact, setContact] = useState({
    contactName: "",
    contactEmail: "",
    message: "",
  });

  const updateContact = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetContact = () => {
    setContact({
      contactName: "",
      contactEmail: "",
      message: "",
    });
  };

  return (
    <ExampleContext.Provider value={{ data, setData, contact,setContact, updateContact, resetContact }}>
      {children}
    </ExampleContext.Provider>
  );
};
