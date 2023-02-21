import React, { useState } from 'react'

export default function LoginForm() {
  // state
  const [userName, setuserName] = useState("");

  // comportements
  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Bonjour ${userName}`)
    setuserName("")
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
            <input value={userName} type="text" placeholder="Entrez votre prénom..." required onChange={handleChange}/>
        <button>Accéder à votre espace</button>
        </form>
    </div>
  )
}
