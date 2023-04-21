import data from './data/rickandmorty/rickandmorty.js';
import { } from './data.js';
import { navHeader, sideBar } from './contents.js';

// eslint-disable-next-line no-console
console.log(data);

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



// PERSONAJES
const contenedor = document.querySelector('#root2')
// eslint-disable-next-line no-console
console.log(contenedor);
data.results.forEach(element => {

  const containerpersonaje = document.createElement('div')
  const imagen = document.createElement('img')
  const nombre = document.createElement('p')

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
});

const ventanaModal = document.querySelector('#root3')
ventanaModal.addEventListener("click",() => {
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
  const episodesVentanaModal = document.createElement('h2')

  iconoCerrado.src = "../imagenes/iconocerrarventanamodal.png"
  imagenVentanaModal.src = personaje.image
  nombreVentanaModal.textContent = personaje.name
  statusVentanaModal.textContent = personaje.status
  speciesVentanaModal.textContent = personaje.species
  typeVentanaModal.textContent = personaje.type
  genderVentanaModal.textContent = personaje.gender
  originVentanaModal.textContent = personaje.origin.name
  locationVentanaModal.textContent = personaje.location.name
  episodesVentanaModal.length = personaje.episode

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
  episodesVentanaModal.setAttribute("class", "datosVentanaModal")

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
  contenedorVentanaModal.appendChild(episodesVentanaModal)

  iconoCerrado.addEventListener('click',() => {
    limpiarVentanaModal()
  })
}

function limpiarVentanaModal (){
  const ventanaModal = document.querySelector('#root3')

  ventanaModal.innerHTML = ''
}