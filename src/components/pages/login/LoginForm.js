import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  // state
  const [userName, setuserName] = useState("");
  const navigate = useNavigate()

  // comportements
  const handleSubmit = (event) => {
    event.preventDefault()
    setuserName("")
    navigate(`order/${userName}`)
  }

  const handleChange = (event) => { 
    setuserName(event.target.value)
  }

  // affichage 
  return (
    <div>
        <h1>Bienvenue chez nous !</h1>
        <br />
        <h2>Connectez-vous</h2>
        <form action="submit" onSubmit={handleSubmit}>
            <input value={userName} type="text" placeholder="Entrez votre prénom..." required onChange={handleChange} name={userName}/>
            <button>Accéder à votre espace</button>
        </form>
    </div>
  )
}
