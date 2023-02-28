import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div>
        <h1>Erreur</h1>
        <br />
        <Link to="/">
            <button>Retourner vers la page d'accueil</button>
        </Link>
    </div>
  )
}
