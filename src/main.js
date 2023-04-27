import data from './data/rickandmorty/rickandmorty.js';
import { funcionOrdenadoaZ, funcionOrdenadozA, filterGender, filterOrigen } from './data.js';
import { navHeader, sideBar } from './contents.js';


//console.log(data);

// NAVEGADORES (HEADER y SIDEBAR)
const navcontainer = document.createElement('div');
const maincontainer = document.createElement('div');
const barralateral = document.querySelector('.barralateral');
const barrasuperior = document.querySelector('.barrasuperior');

navcontainer.innerHTML = navHeader;
maincontainer.innerHTML = sideBar;
barrasuperior.appendChild(navcontainer);
barralateral.appendChild(maincontainer);

//BOTONES DE FILTRADO Y ORDENADO
const botonOrdenadoaZ = document.getElementById("aZ");
const botonOrdenadozA = document.getElementById("zA");
const botonFiltradoGenderFemale = document.getElementById("female");
const botonFiltradoGenderMale = document.getElementById("male");

botonOrdenadoaZ.addEventListener("click", () => {
  limpiarContenedor()
  const resultadosaZ = funcionOrdenadoaZ(resultados)
  //console.log(resultadosaZ)
  return mostrarPersonaje(resultadosaZ)
})

botonOrdenadozA.addEventListener("click", () => {
  limpiarContenedor()
  const resultadoszA = funcionOrdenadozA(resultados)
  //console.log(resultadoszA)
  return mostrarPersonaje(resultadoszA)
})

botonFiltradoGenderFemale.addEventListener("click", () => {
  limpiarContenedor()
  const resultadosFemale = filterGender(resultados, "Female")
  console.log(resultadosFemale)
  return mostrarPersonaje(resultadosFemale)
})

botonFiltradoGenderMale.addEventListener("click", () => {
  limpiarContenedor()
  const resultadosMale = filterGender(resultados, "Male")
  //console.log(resultadosMale)
  return mostrarPersonaje(resultadosMale)
})


//CALCULO AGREGADO
const originName = data.results.flatMap(origen => origen.origin)
//console.log(originName)

function calculoAgregado() {
  const tierra = "Earth (C-137)"
  const resultadosLocation = filterOrigen(originName, tierra)
  //console.log(resultadosLocation)
  const resultadosLocationLength = resultadosLocation.length

  const totalPersonajes = data.info.count
  //console.log(totalPersonajes)

  const resultadoCalculoAgregado = ((resultadosLocationLength / totalPersonajes) * 100)
  return (Math.ceil(resultadoCalculoAgregado) + "%" + " of the characters come from " + tierra)

}

// FUNCION MOSTRAR PERSONAJES
const contenedor = document.querySelector('#root2')
const resultados = data.results
//console.log(contenedor);

function mostrarPersonaje(resultadosparametro) {
  resultadosparametro.forEach((element => {

    const containerpersonaje = document.createElement('div')
    const imagen = document.createElement('img')
    const nombre = document.createElement('p')

    //EVENTLISTENER PARA ABRIR VENTANA MODAL
    containerpersonaje.addEventListener('click', () => {
      abrirModal(element)
    })

    imagen.src = element.image
    nombre.textContent = element.name

    containerpersonaje.setAttribute("class", "containerPersonaje")
    imagen.setAttribute("class", "imagenPersonaje")
    nombre.setAttribute("class", "nombrePersonaje")

    contenedor.appendChild(containerpersonaje)
    containerpersonaje.appendChild(imagen)
    containerpersonaje.appendChild(nombre)
  }));
}

mostrarPersonaje(resultados);

//VARIABLE PARA LIMPIAR VENTANA MODAL EN EL ESPACIO VACIO
const ventanaModal = document.querySelector('#root3')
ventanaModal.addEventListener("click", () => {
  ventanaModal.style.display = 'none'
  limpiarVentanaModal()
});

// VENTANA MODAL
function abrirModal(personaje) {

  const ventanaModal = document.querySelector('#root3')
  ventanaModal.style.display = 'flex'
  limpiarVentanaModal()

  const contenedorVentanaModal = document.createElement('div')
  const iconoCerrado = document.createElement('img')
  const imagenVentanaModal = document.createElement('img')
  const nombreVentanaModal = document.createElement('h1')
  const statusVentanaModal = document.createElement('h2')
  const speciesVentanaModal = document.createElement('h2')
  const typeVentanaModal = document.createElement('h2')
  const genderVentanaModal = document.createElement('h2')
  const originVentanaModal = document.createElement('h2')
  const locationVentanaModal = document.createElement('h2')

  iconoCerrado.src = "../imagenes/iconocerrarventanamodal.png"
  imagenVentanaModal.src = personaje.image
  nombreVentanaModal.textContent = personaje.name
  statusVentanaModal.textContent = personaje.status
  speciesVentanaModal.textContent = personaje.species
  typeVentanaModal.textContent = personaje.type
  genderVentanaModal.textContent = personaje.gender
  originVentanaModal.textContent = personaje.origin.name
  locationVentanaModal.textContent = personaje.location.name

  ventanaModal.setAttribute("class", "ventanaModal")

  iconoCerrado.setAttribute("class", "iconoCerrarVM")
  contenedorVentanaModal.setAttribute("class", "contenedorVentanaModal active")
  imagenVentanaModal.setAttribute("class", "imagenVentanaModal")
  nombreVentanaModal.setAttribute("class", "nombreVentanaModal")
  statusVentanaModal.setAttribute("class", "datosVentanaModal")
  speciesVentanaModal.setAttribute("class", "datosVentanaModal")
  typeVentanaModal.setAttribute("class", "datosVentanaModal")

  genderVentanaModal.setAttribute("class", "datosVentanaModal")
  originVentanaModal.setAttribute("class", "datosVentanaModal")
  locationVentanaModal.setAttribute("class", "datosVentanaModal")

  ventanaModal.appendChild(contenedorVentanaModal)
  contenedorVentanaModal.appendChild(iconoCerrado)
  contenedorVentanaModal.appendChild(imagenVentanaModal)
  contenedorVentanaModal.appendChild(nombreVentanaModal)
  contenedorVentanaModal.appendChild(statusVentanaModal)
  contenedorVentanaModal.appendChild(speciesVentanaModal)
  contenedorVentanaModal.appendChild(typeVentanaModal)
  contenedorVentanaModal.appendChild(genderVentanaModal)
  contenedorVentanaModal.appendChild(originVentanaModal)
  contenedorVentanaModal.appendChild(locationVentanaModal)

  iconoCerrado.addEventListener('click', () => {
    limpiarVentanaModal()
  })

  //CALCULO AGREGADO EN VENTANA MODAL
  const seccionCalculoAgregado = document.createElement("div")
  seccionCalculoAgregado.setAttribute("class", "calculoVentanaModal")
  contenedorVentanaModal.appendChild(seccionCalculoAgregado)

  seccionCalculoAgregado.textContent = calculoAgregado()

}

//FUNCION PARA LIMPIAR VENTANA MODAL
function limpiarVentanaModal() {
  const ventanaModal = document.querySelector('#root3')
  ventanaModal.innerHTML = ''
}

//FUNCION PARA LIMPIAR CONTENEDOR(ROOT2)
function limpiarContenedor() {
  const contenedor = document.querySelector('#root2')
  contenedor.innerHTML = ""
}