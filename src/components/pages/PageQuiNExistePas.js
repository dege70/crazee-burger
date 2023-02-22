import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PageQuiNExistePas() {
  return (
    <div>
        <h1>Erreur</h1>
        <br />
        <NavLink to="/">
            <button>Retour à la page d'Accueil</button>
        </NavLink>
    </div>
  )
}
