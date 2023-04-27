# Data Lovers

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Investigación previa](#2-investigación-previa)
* [3. Proceso de diseño](#3-proceso-de-diseño)


***


## 1. Resumen del proyecto

En este proyecto se construyó una _página web_ para visualizar un
_conjunto (set) de datos_** que se adecuó a lo que descubrió que el usuario
necesita.

Como entregable final se tuvo una página web que permite **visualizar la data,
filtrarla, ordenarla y hacer algún cálculo agregado**.



## 2. Investigación previa

#### ¿Quiénes son los principales usuarios?

La serie tiene gran acogida a nivel mundial, de todo este fandom hay un grupo que 
desea poder interactuar y ver la información de los personajes y de la serie en 
general.
<br>
Entonces los principales usuarios de nuestro producto serian este fandom.

#### ¿Cuáles son los objetivos de estos usuarios en relación con el producto?

Sobre la información que podrían necesitar nuestros usuarios y encontramos que los 
datos de mayor interés para ellos son:
<br>
Información relevante sobre los personajes, como nombre, género, especie, lugar de 
origen, imagen y episodios donde aparece.
<br>
Adicionalmente a esta información, para nuestros usuarios es importante poder ver 
la lista de personajes que aparecen en la serie, la cantidad de episodios, los 
diferentes lugares de origen, para tener mayor información de la serie.

#### ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?

* Nombre
* Imagen
* Estado de vida
* Especie
* Género
* Lugar de origen (planeta tierra)
* Lugar donde vive
* Episodios donde aparece.

#### ¿Cuándo utilizan o utilizarían el producto?

Se espera que el usuario use el producto cuando siga la serie en alguna plataforma 
de straming y quiera saber mas acerca de ella y de los personajes.



## 3. Proceso de diseño

### Definición del producto

Bienvenido al sitio web Wiki de Rick and Morty. En esta página, encontrarás 
información básica sobre tus personajes favoritos de la serie animada de ciencia ficción.
<br>
Personajes:
Rick Sanchez: Un científico loco, ebrio y egoísta que vive con su hija y su 
familia en su casa en el suburbio. Es el abuelo de Morty y el personaje principal de
la serie.
<br>
Morty Smith: El nieto de Rick, es un adolescente tímido e inseguro que acompaña a Rick
en sus aventuras interdimensionales.
<br>
Beth Smith: La hija de Rick y madre de Morty, es una cirujana veterinaria y ama de casa 
que tiene una relación difícil con su padre.
<br>
Jerry Smith: El esposo de Beth y padre de Morty, es un hombre inseguro y torpe que trabaja 
en una empresa de publicidad.
<br>
Summer Smith: La hermana mayor de Morty, es una adolescente popular y superficial que 
a menudo se une a Rick y Morty en sus aventuras.
<br>
En esta Wiki podrás encontrar información sobre estos personajes con los botones filtrar por y ordenar por.
Filtrarlos por género y ordenarlos en orden alfabético de manera ascendente y descentente.
Incluimos un porcentaje de los personajes que tienen como origen a "Tierra C-137".  

### Historias de usuario

Las historias de usuario fueron creadas con las siguientes premisas:
<br>
Como.. 
<br>
Quiero..
<br>
Para..
<br>
De acuerdo a las necesidades observadas de los fans de Rick and Morty elaboramos las siguientes historias de usuario:

#### Histioria de usuario 1 (HU1)
Como.. parte del fandom.
<br>
Quiero.. desplegar un menú de personajes.
<br>
Para.. ver todos los personajes de la serie.

#### Histioria de usuario 2 (HU2)
Como.. fan nuevo.
<br>
Quiero.. filtrar los personajes.
<br>
Para.. conocer generalidades de personajes femeninos.

#### Histioria de usuario 3 (HU3)
Como.. parte del fandom de R&M.
<br>
Quiero.. ordenar a los personajes por orden alfabético.
<br>
Para.. navegar de manera ordenada por los personajes.

#### Histioria de usuario 4 (HU4)
Como.. nuevo fan de R&M.
<br>
Quiero.. visualizar la biografía de Rick.
<br>
Para.. saber de qué dimensión es.


### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

Una vez definidas las historias de usuario generamos bocetos, para visualizar las ideas que se 
formaron para dar respuesta a las necesidades de los usuarios.
Se generaron 2 bocetos, el primero referente a las HU1, HU2 y el segundo referente a las HU3, HU4.

##### Prototipo de baja fidelidad 1 (HU1, HU2)
![Alt text](src/imagenes/Prototipo%20de%20baja%20fidelidad%201%20(HU1,%20HU2).jpg)
##### Prototipo de baja fidelidad 2 (HU3, HU4)
![Alt text](src/imagenes/Prototipo%20de%20baja%20fidelidad%202%20(HU3,%20HU4).jpg)



#### Prototipo de alta fidelidad

Habiendo realizado los prototipos de baja fidelidad empezamos a buscar en diferentes fuentes de
 información como podiamos adecuarnos a la filosofía de los fans de la serie, intentando buscar momentos icónicos que le dieran significado al diseño y sea considerado interactivo y divertido.
Tambien se decidió que la prioridad sea que fuera funcional e intuitivo.
<br>
El diseño del prototipo de alta fidelidad fue diseñado en Figma y testeado en el squad 1.

![Alt text](src/imagenes/Prototipo%20de%20alta%20fidelidad%20(1).jpg)
![Alt text](src/imagenes/Prototipo%20de%20alta%20fidelidad%20(2).jpg)

#### Testeos de usabilidad

Tras ser probado por miembros del squad 1, los testeos de usabilidad dieron los siguientes resultados:

* HU1: El usuario penso que al desplegar el menu y ver los personajes ya estaba cumpliendo la consigna y no abrio la pagina todos.
* HU2: El proceso se completo de manera exitosa, la observacion fue que se esperaba que el botón "filtrar por" funcionara con el icono y el nombre.
* HU3: El proceso se completo de manera exitosa.
* HU4: El proceso se completo de manera exitosa.

Modificaciones:

* HU1: Se modifico la redacción de la HU1 para que sea mas descriptiva, sin embargo conservo la misma escencia.
* HU2: Al construir el botón en HTML ese problema desaparecería.

### Pruebas unitarias

Construimos las pruebas unitarias de todas las funciones puras.
Dieron como resultado 100%.
