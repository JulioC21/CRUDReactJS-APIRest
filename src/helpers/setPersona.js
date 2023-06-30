export async function setPersona() {
  const persona = {
    id: 0,
    nombre: "Gabriel",
    apellido: "Avalos",
    edad: 19,
    email: "migueavalos21@hotmail.es",
    telefono: "0972589631",
  };
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(persona),
  };
  const url = `https://localhost:7036/api/Persona/InsertarPersona`;
  try {
    const resp = await fetch(url, requestOptions).catch(function (error) {
      console.log("Hubo un problema con la petición Fetch:" + error.message);
    });
    const data = await resp.json();
    
    return data;
  } catch (error) {
    console.log(error);
  }
}
