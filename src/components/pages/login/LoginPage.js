import LoginForm from "./LoginForm"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderPage from "../OrderPage";

export default function LoginPage() {

  // affichage
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/order" element={<OrderPage />} />
        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path="*" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  )
  }
