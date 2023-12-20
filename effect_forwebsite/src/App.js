import { useEffect, useState } from "react";
import Skeleton from "./skeleteon";
import Card from "./card";

function App() {
  const [loading , setLoad] = useState(true)
  useEffect(() => {
    setTimeout(() =>{
      setLoad(false)
    }, 1500)
  }, [])


  return (
  <div className="flex justify-center items-center h-screen"> 
  {loading ? <Skeleton /> : <Card />}

  </div>
  )
}

export default App;
