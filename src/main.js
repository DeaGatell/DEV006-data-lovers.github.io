import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
import { navHeader, sideBar } from './contents.js';

console.log(example, data);

const navcontainer= document.createElement('div');
const maincontainer= document.createElement('div');

navcontainer.innerHTML=navHeader;
maincontainer.innerHTML=sideBar;
document.body.appendChild(navcontainer);
document.body.appendChild(maincontainer);