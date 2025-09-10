import { useState } from 'react'
import PanelCiudadano from './components/PanelCiudadano';
import './App.css'
import Login from './components/Login';
function App() {

  const [user, setUser] = useState(null);
  const handleLogin = (email, password) =>{
    console.log("Usuario logeado:", email, password)
    setUser({email: email});
  } 
  const handleLogout = () =>{
    console.log("Usuario deslogeado")
    setUser(null);
  }
  return (
    <div>
      
        <h1>Sistema de Gestión de Reportes</h1>
        <h2>Limpieza Publica Municipal</h2>
      
      {!user ? (<Login onLogin={handleLogin}/>) : (<PanelCiudadano user={user} onLogout={handleLogout}/>)}
      
    </div>
  
  )
}

export default App
