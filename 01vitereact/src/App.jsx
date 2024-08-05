import Chai from "./chai"

function App() {
  const username = "nooralm"

  return (
    // to return more item used (<>)
    // how to inject variabls in the module
    <>
    <Chai/>
                   {/* evaluated expresion {} final output */}
    {<h1>the username is {username}</h1>  /*  // eject the variables */}
    <h1>hoota</h1>
    <h4>alala</h4>
    </>
  )
}

export default App
