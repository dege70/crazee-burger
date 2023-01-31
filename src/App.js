import { useState } from "react";
import Loginform from "./components/Loginform"
import LoginPage from "./components/pages/LoginPage";

function App () {
  // state (état, données)
  const [login, setLogin] = useState("");

  // comportements

  const handleAdd = (loginAAjouter) => {
    // 1. copie du state
    const loginCopy= [...login];

    // 2. manipulation sur la copie du state
    loginCopy.push({ loginAAjouter });

    // 3. modifier le state avec le setter
    setLogin(loginCopy);
  }

  // affichage (render)
  return (
    <div>
      <LoginPage />
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
      <Loginform handleAdd={handleAdd} />
    </div>
  );  
}

export default App;
