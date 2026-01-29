import { useContext } from "react";
import ExampleContext from "./exampleContext";

export const useData = () => {
  return useContext(ExampleContext);
};
