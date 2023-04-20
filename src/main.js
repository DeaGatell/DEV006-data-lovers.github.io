import data from './data/rickandmorty/rickandmorty.js';
import { } from './data.js';
import { navHeader, sideBar } from './contents.js';

// eslint-disable-next-line no-console
console.log(data);

// Navegadores (header y sidebar)
const navcontainer = document.createElement('div');
const maincontainer = document.createElement('div');
const barralateral = document.querySelector('.barralateral');
const barrasuperior = document.querySelector('.barrasuperior');


navcontainer.innerHTML = navHeader;
maincontainer.innerHTML = sideBar;
barrasuperior.appendChild(navcontainer);
barralateral.appendChild(maincontainer);

//Botones de filtrado y ordenado



// Personajes
const contenedor = document.querySelector('#root2')
// eslint-disable-next-line no-console
console.log(contenedor);
data.results.forEach(element => {

  const containerpersonaje = document.createElement('div')

  const imagen = document.createElement('img')
  const nombre = document.createElement('p')

  imagen.src = element.image
  nombre.textContent = element.name

  containerpersonaje.appendChild(imagen)
  containerpersonaje.appendChild(nombre)

  contenedor.appendChild(containerpersonaje)
});