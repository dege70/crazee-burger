import React from 'react'
import { Link } from 'react-router-dom'

export default function OrderPage( {name} ) {
  return (
    <div>
       <h1>Bonjour {name}</h1>
       <br />
        <Link to="/">
            <button>Déconnexion</button>
        </Link> 
    </div>
  )
}
