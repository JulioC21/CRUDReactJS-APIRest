export const getPersonaToken = async () => {
  try {
    const {token} = await autenticar();
    console.log(token);
    const url = `https://localhost:7036/api/Persona/ListarPersona`;

    const requestOptions = {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const resp = await fetch(url, requestOptions).catch(function (error) {
      console.log("Hubo un problema con la petición Fetch:" + error.message);
    });

    const data = await resp.json();
    console.log(data);
    const personas = data.map((datos) => ({
      id: datos.id,
      nombre: datos.nombre,
      apellido: datos.apellido,
      edad: datos.edad,
      email: datos.email,
      telefono: datos.telefono,
    }));
    return personas;
  } catch (error) {
    console.log(error);
  }
};

export async function autenticar() {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userName: "admin", password: "a.123456" }),
  };
  const url = `https://localhost:7036/api/Auth`;
  try {
    const resp = await fetch(url, requestOptions).catch(function (error) {
      console.log("Hubo un problema con la petición Fetch:" + error.message);
    });
    const data = await resp.json();
    console.log(data);
    return data;

  } catch (error) {
    console.log(error);
  }
}
