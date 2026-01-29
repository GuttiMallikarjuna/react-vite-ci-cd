import { useData } from "../context/useData";


export default function Home() {
  const { data } = useData();
  return (
    <div className="page">
      <h1>Home</h1>
      <p>Vite + React CI/CD Demo</p>
      <p>This is the home page of the application.</p>
      <p>It showcases a simple React application built with Vite and deployed using GitHub Actions CI/CD.</p>
      <p>Feel free to explore the different pages of this demo app.</p>
      <p>Enjoy your stay!</p>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
      <p>Email: {data.email}</p>
     
    </div>
  );
}
