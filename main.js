// console.log("uno");
// console.log("dos");
// setTimeout(() => {
//     alert("hola mundo")

// }, 1000);
// console.log("tres");
// console.log("cuatro");
// console.log("cinco");

const tbody = document.querySelector("tbody")
const btnNew = document.querySelector("#btn-enviar")

btnNew.addEventListener("click", function() {
    //enviarDatosALaAPI()
    eliminar()
})

async function llamadoAUnaAPI() {
    const respuesta = await fetch("https://api.escuelajs.co/api/v1/categories") //Llamamos los datos
    const datos = await respuesta.json() //Transformamos los datos JSON a código JS (para poderlos leer)

    datos.forEach(dato => {
        tbody.innerHTML += `
        <tr>
                <th scope="row">${dato.id}</th>
                <td>${dato.name}</td>
                <td>
                <img src="${dato.image}" alt="${dato.name}" width=100>
                </td>
                <td>${dato.creationAt}</td>
                <td>${dato.updatedAt}</td>
        </tr>  
        `
    });
}
llamadoAUnaAPI()

const newCategory = {
    name: "Lenguajes Programación",
    image: "https://web.whatsapp.com/09659a86-56ea-44bf-b001-32273be17c9d"
}

// GET => Obtener informacion
// POST => Enviar informacion
// PUT => Actualizar informacion
// PATCH => Actualizar un dato puntualmente
// DELETE => Eliminar informacion

function enviarDatosALaAPI() {
    fetch("https://api.escuelajs.co/api/v1/categories", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(newCategory)
    })

}

function eliminar(){
    let id= prompt("Ingresar el ID de la categoria que quieres eliminar")
    fetch(`https://api.escuelajs.co/api/v1/categories/${id}`,{
        method:"DELETE",
        headers:{
            "content-type": "application/json"
        }
    })
}