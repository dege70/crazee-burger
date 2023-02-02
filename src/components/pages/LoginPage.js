import { useState } from "react";

export default function LoginPage() {
  // state
  const [login, setLogin] = useState("");

  // comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${login}`);
    setLogin("");
  }

  const handleChange = (event) => { 
    setLogin(event.target.value);
  }

  // affichage
  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input value={login} type="text" placeholder="Entrez votre prénom..." required onChange={handleChange}/>
        <button>Accéder à votre espace</button>
      </form>
    </div>
    )
  }
