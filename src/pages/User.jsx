// src/pages/User.jsx
import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();

  return (
    <>
      <h1>Perfil del usuario</h1>
      <p>ID del usuario: {id}</p>
    </>
  );
}