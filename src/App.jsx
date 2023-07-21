import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Navbar from "./components/Navbar";
import './App.css'

function App() {
  const router = useRoutes(routes);
  return (
    <>
      <div className="container max-w-7xl font-Metropolis text-blackRock">
        <Navbar/>
        {router}
      </div>
    </>
  )
}

export default App
