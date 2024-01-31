import { useState } from "react"
import { UserList } from "./userList"

export const UsersApp = () => {
    
  const [endPoint, setendPoint] = useState ('users')
  //Para llamar a la api con un boton
  const handleFetch = () => {
    setendPoint('posts')
  //}
  //useEffect( () => {
   // fetchUsers()
  //}, [])
  }
  return (
    <>
    <h2>Listado de Usuarios:</h2>
        <UserList endPoint={endPoint}></UserList>
        <button onClick={handleFetch}>Estoy llamando a la  API</button>
    </>
    //<button onClick={handleFetch}>Llamar API</button>
  )
  
  }

 
