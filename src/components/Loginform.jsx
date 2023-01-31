import { useState } from "react";

export default function Loginform({ handleAdd }) {
    // state
    const [nouveauLogin, setNouveauLogin] = useState("");

    // comportement
    const handleSubmit = (event) => {
    event.preventDefault();
    
    // 1. copie du state
    
    // 2. manipulation sur la copie du state
    const nom = nouveauLogin;
    const loginAAjouter = {nom};
    
    // 3. modifier le state avec le setter
    alert(`Bonjour ${nom}`);
    handleAdd(loginAAjouter);
    setNouveauLogin("");
  }

    const handleChange = (event) => {
        setNouveauLogin(event.target.value);
  }

    // affichage
    return (
        <form action="submit" onSubmit={handleSubmit}>
            <input value={nouveauLogin} type="text" placeholder="Entrez votre prénom..." required onChange={handleChange} />
            <button>Accéder à votre espace</button>
        </form>
    )
}
