import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function OrderPage() {
  // State
  const {userName} = useParams()

  // Comportement

  // Affichage
  return (
    <div>
       <h1>Bonjour {userName}</h1>
       <br />
        <Link to="/">
            <button>Déconnexion</button>
        </Link> 
    </div>
  )
}