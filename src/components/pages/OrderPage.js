import React from 'react'
import { NavLink } from 'react-router-dom'

export default function OrderPage() {
  return (
    <div>
       <h1>Bonjour</h1>
       <br />
        <NavLink to="/">
            <button>Déconnexion</button>
        </NavLink> 
    </div>
  )
}
