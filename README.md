<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 82d8514ff0e6fbff47f14b5a3bf27e146b08313f
# PokePedia

## ELECCIÓN DE LA DATA Y EL USUARIO
1. _La data escogida_ fue la de Pokemón ya que es una data amigable, la cual tiene un amplio público haciendolo así popular y con un mayor campo por explorar.
2. _El usuario_: Se analizó y se priorizo resolver las problemáticas para las personas que eran fanáticos de la serie, ya que así no se tendría un sector reducido(usuarios de PokemonGo).
3. _Las expectavivas_: Se esperaba poder tener un amplio público además de accesible para poder definir el producto a desarrollar, nos basamos en las **entrevistas** a público con conocomiento previo a la serie Pokemón (fans en su mayoría), con los cuales se pudo sacar varias problemáticas existentes con respecto a esta.

### PROBLEMÁTICAS
1. Los usuarios expresaban que existe una muy larga variedad de pokemones por lo cual era muy difícil recordar ciertas características de ellos.
2. Los usuarios expresaban que se les complicaba en cierto modo poder separar a los pokemones por tipos.
3. Los usuarios no tenían idea de cuanto pesaban, ni median.
4. Para algunos de ellos, era importante saber las debilidades de los pokemones.

### HISTORIAS DE USUARIO
Se realizaron y obtuvieron en base a _las problemáticas_.

- HU01: *Como* usuario *quiero* visualizar todos los Pokémon que hay *para* conocer más sobre ellos.

    _Definición de terminado HU01:_
La HU01 estará terminada cuando en la pantalla se muestren todos los Pokémon con las propiedades que se han elegido teniendo en cuenta lo que desea saber el usuario.

- HU02: *Como* usuario *quiero* buscar a los Pokémon por su nombre *para* buscarlos de manera rápida.

    _Definición de terminado HU02:_
    La HU02 estará terminada cuando en la pantalla haya un input donde el usuario pueda ingresar el nombre del Pokémon que quiera buscar y el botón para que lo busque.
    Además, que se muestre el Pokémon que se ha buscado.

- HU03: *Como* usuario *quiero* poder agruparlos por categorías *para* conocerlos más según su tipo.

    _Definición de terminado HU03:_
    La HU03 estará terminada cuando en la pantalla haya un botón de Búsqueda Avanzada, para que cuando el usuario haga clic, se despliegue un div con un select con todos los tipos que se pueden seleccionar, y un botón para hacer la búsqueda.
    Luego de eso, se deben mostrar todos los Pokémon que tengan como tipo el seleccionado.

- HU04: *Como* usuario *quiero* poder sacar promedios sobre la altura y peso de los Pokémon *para* conocer datos extras sobre todos ellos.

    _Definición de terminado HU04:_
    La HU04 estará terminada cuando en la pantalla se muestren el peso y altura promedio según el tipo de Pokémon elegido.  Adicional a eso, el usuario podrá ver la cantidad de Pokémon por tipo que hay.

- HU05: *Como* usuario *quiero* ordenar a los Pokémon alfabéticamente *para* así visualizarlos mejor.

    _Definición de terminado HU05:_
    La HU05 estará terminada cuando en la pantalla se muestre un select con opciones de ordenar de la A a la Z y de la Z a la A.  Luego de seleccionar, que se muestren los Pokémon ordenados alfabéticamente según su nombre.


### DEFINICIÓN DE TERMINADO DE LAS HISTORIAS DE USUARIO
Para que cada historia de usuario esté terminada, además de la funcionalidad especificada en cada historia, debe tener su prototipo, ser responsive y estar subido a gh-pages.

## DEFINICIÓN DEL PRODUCTO
Luego de definir las historias de usuario, se decidió implementar una aplicación de nombre **PokePedia**, que tiene como usuarios principales a los fans de la serie Pokémon.
Tiene como objetivo que el usuario pueda conocer más sobre las características principales de los Pokémon.
Lo utilizarían cada vez que quieran saber cómo son los Pokémon, saber sus nombres, los tipos, las debilidades, su peso y talla.


## EL PROCESO DE DISEÑO
El proceso de diseño tiene cinco fases relacionadas al usuario para satisfacer sus necesidades.

### _Descubrimiento e investigación_
![Proceso de diseño 1](https://lh5.googleusercontent.com/87kdbH1PfKC9A8Iik8Ks9z3sbTgzKKyCP_DRUHHU9F-6FT4lqQU5cASr7fMwocdfBGF6z1bGtT1XNVh-vV8gaeLH-SzmFBy0bopUi5hCTHAQ-z8nZm1_WKBfjoAP7QndyxdDOsj8N7U)

- _Entrevistas_:  Las entrevistas fueron la base para empezar a realizar el producto ya que con ellas encontramos las **problemáticas** ya mencionadas, se definieron las **historias de usuario** y se planteó la resolución de problemas.

A continuación un resumen de las conclusiones que se obtuvieron de los usuarios entrevistados:

![user-1](https://i.ibb.co/1LhvjnF/user1.jpg)

![user-2](https://i.ibb.co/sWGP8v8/user2.jpg)

![user-3](https://i.ibb.co/SDjfFQM/user3.jpg)

![user-4](https://i.ibb.co/CQdx21H/user4.jpg)

![user-5](https://i.ibb.co/N1yB23K/user5.jpg)


#### RESOLUCIÓN DE PROBLEMAS
 Se planteó implementar una aplicación en base a las necesidades del usuario.
 Una app:
 1. En la que puedan visualizar a toda la gama de los Pokémon.
 2. En la que puedan filtrar a los Pokémon por tipo, para que lo puedan organizarlo mejor.
 3. Que permita buscar por nombre a los Pokémon.
 4. Que pueda dar a conocer el promedio del peso y talla de los Pokémon.
 5. Que puedan ordenar de forma ascendente y descendente alfabéticamente por nombre.


### _Síntesis y definición_

![Proceso de diseño 2](https://lh5.googleusercontent.com/nQIPFhjS7QtmjupPsDHE8hURMZRdowkuopqIsWMGYR6YCdNRd3eDlDHfz11NZ6MGCpG3iiVHx3ZY3gsutpaHz_aU0gPp-Ak2v224rR0VHUpEKbVjLB3UofCv521cEbA3P0yhr_Hc-8M)


En base a problemática.
1. Barra de búsqueda
2. Un select con los tipos
3. Opción de filtrado (botón)
4. Opción de sacar promedios (botón)


### _Ideación_

![Proceso de diseño 3](https://lh4.googleusercontent.com/KUDC2ezoy6SbbodIMunjDjlFvdqj81VOX6X8wQBfDAsyOZFy4WnjHBJZpLnX6cFM0_iBT416x67eXQRRFqMXsydRFNX5L_0tQpiRX3NKhl-qylj9QQUpdyBIS7msN5hxz3MjsCjfZ6o)

Al tener la data ya establecida, validamos con los usuarios que información será útil para ellos.

El usuario requirió:

1. Imagen del Pokémon
2. Nombre
3. Tipo
4. Datos extras (peso y altura)
5. Debilidades

### _Prototipado_

![Proceso de diseño 4](https://lh4.googleusercontent.com/O0va4gSdInWa4i-2gLgIpaTBCaAeoFeqjtc1OqVtSJpvqVmm4vnC45jzYNkfS7JEnRJY05JzjXXYGIOiM_Y_iTq-D_NM47yFfjrTZQSe8OL_2nx0ieLWNKKVbOJz_tXE8zX09Ibv3mc)

_Prototipo de baja fidelidad_
Es el prototipo hecho en lápiz y papel, las dos ideas de pantalla de inicio y la segunda página donde se muestra todo lo demás.

#### PROTOTIPO 1
![Prototipo1](https://i.ibb.co/4MPck5q/Scan01.jpg)

#### PROTOTIPO 2
![Prototipo2](https://i.ibb.co/CVLJ0QV/Scan.jpg)

#### PROTOTIPO 3
![Prototipo3](https://i.ibb.co/1sYBDyh/Scan02.jpg)

_Prototipo de alta fidelidad_
Son los prototipos hecho en Figma, exportados a Zeplin:

[Enlace en Figma](https://www.figma.com/file/BVuGmJQUXi1ODQ1jufqMA1j5/PokePedia-Prototipos?node-id=142%3A141)

[Enlace de Zeplin](https://zpl.io/aMK10n3)


### _Testeo con usuarios_

![Proceso de diseño 5](https://lh5.googleusercontent.com/QllK4qB6uZtg6YFMriQKgpgLRO6gnNb1H88eBZ_7-GUvWleZ1GfXrE8BgFdEyQRgp2OM5bGXn_eBxaoOELRrN3nI9R3A7GlW6MAo6Yf67nqwow059gTQXvom9ULgDrXlVKUMGVJ00NE)

El feedback recibido por los usuarios al momento de mostrarles el prototipo de alta fidelidad.

Además de mostrarles el prototipo de alta fidelidad, en las primeras historias se mostró la interfaz.

## IMPLEMENTACIÓN DE LA INTERFAZ DE USUARIO (HTML/CSS/JS)


### Interfaz de Usuario de la HU01:

![IU-HU01-01](https://i.ibb.co/gzgHcVG/IU-HU1-Mostrar-Data.jpg)

_Iteración con usuarios:_
El usuario no identificaba la aplicación como algo relacionado a Pokémon por los colores que se le había puesto, solo lo reconocía porque se mostraban los Pokémon.

Lo que se hizo después de tener esa información del usuario, fue modificar el diseño para la siguiente historia de usuario.


### Interfaz de Usuario de la HU02:

![IU-HU02-01](https://i.ibb.co/Tq48ZL1/IU-HU2-Buscar-Por-Nombre.jpg)

![IU-H02-02](https://i.ibb.co/ZG2bg5s/IU-HU2-Buscar-Por-Nombre-Run.jpg)

_Iteración con usuarios:_
Se mostró el prototipo al usuario, a pesar de tener un ícono de Pokémon y los colores, decía que le faltaba algo más.

Así que se agregó un fondo relacionado a Pokémon, además de mostrar dos Pokémon por fila y centrado.


### Interfaz de Usuario de la HU03:

![IU-HU03-01](https://i.ibb.co/xgdxcwh/IU-HU3-Filtrar-Por-Tipo.jpg)

![IU-HU03-02](https://i.ibb.co/VwvFPkT/IU-HU3-Filtrar-Por-Tipo-Run.jpg)


### Interfaz de Usuario de la HU04:

![IU-HU04-01](https://i.ibb.co/QKnHqNg/IU-HU4-Mostrar-Cantidad-Tipos-amp-Promedio-Talla-Peso-Run.jpg)


### Interfaz de Usuario de la HU05:

![IU-HU05-01](https://i.ibb.co/tbcnzHG/IU-HU05-Ordenar-Alfab.jpg)

![IU-HU05-02](https://i.ibb.co/Pz47XZs/IU-HU05-Ordenar-Alfab-Run1.jpg)

![IU-HU05-03](https://i.ibb.co/1Z9K4Vd/IU-HU05-Ordenar-Alfab-Run2.jpg)


___


## TRABAJO EN EQUIPO

Al empezar el proyecto, empezamos definiendo las historias de usuario, pusimos tareas generales en nuestro tablero, pero no fue de mucha ayuda.

Para la siguiente historia, definimos un orden de trabajo, iba a ser la siguiente:

1. Primero crear los tests en `data.spec.js` de las funciones que queriamos que funcionen.
    - Para cada función, debía retornar que era una función.
    - Y además, que funcione correctamente, llamando a la función con sus argumentos.  Para eso, creamos inputs y outpus de ideal que quería que retorne.

2. Investigar sobre cuáles eran los métodos que podíamos usar para crear la función.

3. Hacer pruebas en la consola de la aplicación, hasta llegar a que la función ya esté implementada.

4. Implementar la función en nuestro archivo `data.js`.

5. Pasar los tests de esa función.

6. Una vez que pasó el test de funcionalidad, se implementa en el archivo `main.js` para que se muestre en la interfaz de usuario (IU)

Trabajar de esa manera nos ayudó a tener claro que funciones eran las que queriamos implementar.

En nuestro tablero, por cada historia de usuario, dividimos las tareas por colores:
- El naranja era todo lo que se tenía que crear con javaScript (funciones, tests)
- El azul era lo que se implementaba en el html
- El rosado era el diseño que se debía hacer de acuerdo al prototipo de alta fidelidad.
<<<<<<< HEAD
=======
# Data Lovers

## Índice

* [Preámbulo](#preámbulo)
* [Descripción](#resumen-del-proyecto)
* [Consideraciones generales](#consideraciones-generales)
* [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
* [Parte obligatoria](#parte-obligatoria)
* [Parte opcional](#parte-opcional-hacker-edition)
* [Consideraciones técnicas](#consideraciones-técnicas)
* [Primeros pasos](#primeros-pasos)
* [Contenido de referencia](#contenido-de-referencia)
* [Checklist](#checklist)

***

## Preámbulo

Según un [estudio de IBM](https://www-01.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=WRL12345USEN),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 trillones de bytes de datos, una cifra sin precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

En la siguiente imagen, podrás ver cómo con la data que que se ve en la parte
izquierda se puede construir una interfaz amigable y entendible por el usuario.

![json-interfaz](https://lh4.googleusercontent.com/Tn-RPXS26pVvOTdUzRT1KVaJ-_QbFs9SpcGLxSPE43fgbHaXtFgMUInuDt7kV41DkT1j8Tt29V0LxQW7SMtC6digOIhfTXSBKdwI08wUwhD3RAqlwy0hjfmhZ2BFe91mtmCSEqysfgk)

\* Puedes ver el datalle de la data en este [link](https://gist.github.com/lalogf/dd4aa3017a9f8aa8f90dfbca382c4dc9#file-student-json)
y la interfaz construida en este [link](https://app.talento.laboratoria.la/profile/HFOoMpOreBU2psCcjjLg5O2EWEv2).

## Resumen del proyecto

En este proyecto **construirás una _página web_ para visualizar un
_conjunto (set) de datos_** que se adecúe a lo que descubras que tu usuario
necesita.

Esta vez te proponemos una serie de datos de diferentes _temáticas_ para que
explores y decidas con qué temática te interesa trabajar. Hemos elegido
específicamente estos sets de datos porque creemos que se adecúan bien a esta
etapa de tu aprendizaje.

Una vez que definas tu área de interés, entiende quién es tu usuario y qué
necesita saber o ver exactamente; luego podrás construir la interfaz que le
ayude a interactuar y entender mejor esos datos.

Estos son datos que te proponemos:

* Indicadores de desarrollo del Banco Mundial de algunos países (Brasil, Chile, 
  México y Perú). Estos datos incluyen indicadores demográficos, económicos y 
  comerciales.
* [Pokémon](src/data/pokemon/pokemon.json):
  En este set encontrarás una lista con los 151 Pokémon de la región de Kanto,
  junto con sus respectivas estadísticas usadas en el juego [Pokémon GO](pokemongolive.com).
* [Steam noticias](src/data/steam/steam.json):
  Lista noticias relacionadas a los videojuegos presentes en la
  plataforma de [Steam](https://store.steampowered.com/).
* [League of Legends - Challenger leaderboard](src/data/lol/lol.json):
  Este set de datos muestra la lista de jugadores en una liga del
  juego League of Legends (LoL), puedes revisar la documentación de su API en
  este [link](https://developer.riotgames.com/api-methods/).
* [Personas heridas por medio de transporte en EEUU](src/data/injuries/injuries.json).
  Este set nos muestra el número de personas heridas en accidentes de
  transporte, con data anual desde 1960 y categorizada por tipo de transporte
  (aire, barco, automóvil, moto, bicileta, ...).

Como entregable final tendrás una página web que permita **visualizar la data,
filtrarla, ordenarla y hacer algún calculo agregado**. Como aclaración,
con cálculo agregado nos referimos a distintos cálculos que puedes hacer con
la data que tienes para mostrar información aún más relevante a los usuarios.
Una opción serían cálculos estadísticos como el promedio, el máximo o el mínimo,
por ejemplo, si tenemos una colección que representa a un grupo de personas,
y cada persona está representada como un _objeto_ con una _propiedad_ `altura`,
podríamos elegir calcular la altura promedio en el grupo entre otras cosas.

Cada set de datos tiene una identidad gráfica que deberás utilizar en la
interfaz. La identidad gráfica; o también conocido como guía de estilos en
diseño, de cada set la podrás encontrar en el siguiente
[link](https://drive.google.com/open?id=1eeWFqrWpy-OYOH4EHDckFGunyrm9iNeE).

## Consideraciones generales

* Este proyecto se debe resolver en duplas.
* El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
  interfaz será desplegada usando [GitHub Pages](https://pages.github.com/).
* Tiempo para completarlo: Toma como referencia 3 semanas. Trabaja durante el
  primer Sprint (una semana) y al  final, decide en cuántas semanas lo
  terminarás.

## Objetivos de aprendizaje

El objetivo principal de este proyecto es que aprendas a diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesita.

Dicho en palabras sencillas, aprenderás a:

* Aplicar y profundizar todo lo que aprendiste en el proyecto anterior.
* Pensar en las **necesidades de los usuarios** para crear historias de usuario.
* Escribir y trabajar con **historias de usuario**, sus definiciones de
  terminado (_definition of done_) en la organización y planificación de tu
  trabajo.
* Definir qué data y de qué forma mostrarla en el producto, basándote en
  tu **entendimiento del usuario**.
* Crear productos que sigan los **principios básicos de diseño visual** y
  las **heurísticas de usabilidad**.
* Iterar el diseño del producto, basándote en los resultados de los
  **tests de usabilidad**.
* Manipular **_arreglos_ (_arrays_) y _objetos_ (_objects_)**.
* **Manipular el DOM** (agregar elementos dinámicamente basados en la data).
* **Manejar eventos del DOM** para permitir interacción con el usuario
  (filtrado, ordenado, ...).
* Entender los beneficios y complejidades de **trabajar en equipo** en un
  ambiente de incertidumbre.

## Parte Obligatoria

Los criterios para considerar que has completado este proyecto son:

### Definición del producto

Documenta brevemente tu trabajo en el archivo `README.md` de tu repositorio,
contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve
el problema (o problemas) que tiene tu usuario.

### Historias de usuario

Una vez que entiendas las necesidades de tu usuario, escribe las [Historias
de Usuario](https://es.wikipedia.org/wiki/Historias_de_usuario) que representen
todo lo que el usuario necesita hacer/ver. Asegúrate de incluir una definición
de terminado (_definition o done_) para cada una.

### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

Durante tu trabajo deberás haber hecho e iterado sketches (boceto) de tu
solución usando papel y lápiz. Te recomendamos tomar fotos de todas las
iteraciones que realices, y las subas a tu repositorio, y las menciones en tu
`README.md`.

#### Prototipo de alta fidelidad

Lo siguiente es diseñar tu Interfaz de Usuario (UI por sus siglas en inglés -
_User Interface_). Para eso debes aprender a utilizar alguna herramienta de
diseño visual. Nosotros te recomendamos [Figma](https://www.figma.com/) que es
una herramienta que funciona en el navegador y, además, puedes crear una cuenta
gratis. Sin embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, PowerPoint, Keynote, etc. Recuerda utilizar la identidad
gráfica correspondiente a cada set de datos que elijas.

El diseño debe representar el _ideal_ de tu solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para hackear. Además, tu
diseño debe seguir los fundamentos de _visual design_. También, deberás exportar
tu diseño a [Zeplin](https://zeplin.io/) y utilizar las especificaciones de
estilo que te dé Zeplin al momento de implementar tus diseños en código.

#### Testeos de usabilidad

Durante el reto deberás realizar tests de usabilidad con distintos usuarios, y
en base a los resultados de esos tests, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los tests y cómo los
mejoraste en tu propuesta final.

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
Como mencionamos, **no** es necesario que construyas la interfaz tal como la
diseñaste. Tendrás un tiempo limitado para hackear, así es que deberás
priorizar.

Como mínimo, tu implementación debe:

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista, etc.
2. Permitir al usuario filtrar y ordenar la data.
3. Calcular estadísticas de la colección (o subcolección) como media aritmética,
   máximo y/o mínimo de algún atributo numérico, o contar cuántas veces aparece
   un determinado valor, por ejemplo.
4. Visualizarse sin problemas desde distintos tamaños de pantallas: móviles,
   tablets y desktops.

Es importante que tu interfaz, a pesar de ser una versión mínima de tu ideal,
siga los fundamentos de _visual design_.

### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye pruebas unitarias, pero esperamos
que escribas tu propias pruebas unitarias para las funciones encargadas de
_procesar_, _filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.
Para ello te recomendamos implementar las siguientes funciones en el archivo
`src/data.js`:

* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.

Estas son ideas de funciones que podrías implementar, pero esto depende de tu
propia implementación.

El archivo `src/data.js` tiene que tener una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_).

Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que el usuario interactúe (click,
filtrado, ordenado, ...).

## Parte Opcional (Hacker edition)

Features/características extra sugeridas:

* En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`. La carpeta `src/data` contiene una versión `.js` y una `.json` de
  de cada set datos.
* Agregarle a tu interfaz de usuario implementada visualizaciones gráficas. Para
  ello te recomendamos explorar librerías de gráficas como [Chart.js](https://www.chartjs.org/)
  o [Google Charts](https://developers.google.com/chart/).
* 100% Coverage

## Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
con la excepción de librerías para hacer gráficas (charts); ver
[_Parte opcional_](#parte-opcional-hacker-edition) más arriba.

No se debe utilizar la _pseudo-variable_ `this`.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── package.json
├── README.md
├── src
│   ├── data
│   │   ├── injuries
│   │   │   ├── injuries.js
│   │   │   └── injuries.json
│   │   ├── lol
│   │   │   ├── lol.js
│   │   │   └── lol.json
│   │   ├── pokemon
│   │   │   ├── pokemon.js
│   │   │   └── pokemon.json
│   │   ├── steam
│   │   │   ├── steam.js
│   │   │   └── steam.json
│   │   └── worldbank
│   │       ├── worldbank.js
│   │       └── worldbank.json
│   ├── data.js
│   ├── index.html
│   ├── main.js
│   └── style.css
└── test
    └── data.spec.js

8 directories, 17 files
```

### `src/index.html`

Al igual que en el proyecto anterior, existe un archivo `index.html`. Como ya
sabrás, acá va la página que se mostrará al usuario. También nos sirve para
indicar qué scripts se usarán y unir todo lo que hemos hecho.

En este archivo encontrarás una serie de _etiquetas_ (_tags_) `<script>`
_comentadas_. Para _cargar_ las diferentes fuentes de datos tendrás que
_descomentar_ estas _etiquetas_. Cada uno estos scripts asignará una variable
global con la data correspondiente a esa fuente de datos.

Por ejemplo, si descomentamos la siguiente línea:

```html
<!-- <script src="./data/worldbank/worldbank.js"></script> -->
```

La línea quedaría así:

```html
<script src="./data/worldbank/worldbank.js"></script>
```

Y ahora tendríamos la variable global `WORLDBANK` disponible en nuestros otros
scripts (como `src/data.js` o `src/main.js`).

### `src/main.js`

Recomendamos usar `src/main.js` para todo tu código que tenga que ver con
mostrar los datos en la pantalla. Con esto nos referimos básicamente a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_), ....

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para tus compañeras.

### `src/data.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos y
objetos. La idea de este archivo es contener toda la funcionalidad
que corresponda a obtener, procesar y manipular datos.

En este archivo esperamos que implementes las funciones detalladas en la sección
de [_Pruebas Unitarias_](#pruebas-unitarias).

### `src/data`

En esta carpeta están los datos de las diferentes fuentes. Encontrarás una
carpeta por cada fuente, y dentro de cada carpeta dos archivos: uno con la
extensión `.js` y otro `.json`. Ambos archivos contienen la misma data; la
diferencia es que el `.js` lo usaremos a través de una etiqueta `<script>`,
mientras que el `.json` está ahí para opcionalmente cargar la data de forma
asíncrona con [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
(ver sección de [_Parte Opcional_](#parte-opcional-hacker-edition)).

### `test/data.spec.js`

Tendrás también que completar las pruebas unitarias de las funciones
implementadas en el archivo `data.js`.

## Evaluación

Recuerda revisar la [rúbrica](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRktPN4ilZtkRN5tUb3DVhgeihwlzk63_-JI3moA-bXpKDbHDioAK2H3qbrwWNb0Ql4wX22Tgv7-PDv/pubhtml)
para ver la descripción detallada de cada habilidad y cada nivel. Esta es una
lista de todas las habilidades involucradas en este proyecto y que evaluaremos
cuando lo completes:

### General

| Característica/Habilidad |
|--------------------------|
| Completitud |

### Tech

| Habilidad |
|-----------|
| **JavaScript** |
| Estilo |
| Nomenclatura/semántica |
| Funciones/modularidad |
| Estructuras de datos |
| Tests |
| **HTML** |
| Validación |
| Estilo |
| Semántica |
| **CSS** |
| DRY |
| Responsive |
| **SCM** |
| Git |
| GitHub |
| **CS** |
| Lógica |
| Arquitectura |

### UX

| Habilidad |
|-----------|
| User Centricity |
| Entrevistas |
| Contraste |
| Alineación |
| Jerarquía |
| Tipografía |
| Color |

### Habilidades Blandas

| Habilidad |
|-----------|
| Planificación y organización |
| Autoaprendizaje |
| Solución de problemas |
| Dar y recibir feedback |
| Adaptabilidad |
| Trabajo en equipo |
| Comunicación eficaz |
| Presentaciones |

***

## Pistas sobre cómo empezar a trabajar en el proyecto

Antes de empezar a escribir código, debes definir qué deberá hacer el producto
en base al conocimiento que puedas obtener de tu usuario. Estas preguntas te
pueden ayudar:

* ¿Quiénes son los principales usuarios de producto?
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?

Cuando ya estés lista para codear, te sugerimos empezar de esta manera:

1. Una de las integrantes del equipo debe realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
   tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo. La otra integrante del equipo deber hacer un fork **del
   repositorio de su compañera** y [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1)
   un `remote` hacia el mismo.
2. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
3. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
4. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
5. A codear se ha dicho! :rocket:

<!--
En este proyecto deberás trabajar colaborativamente. Para ello, una de las
integrantes del equipo deberá forkear el repositorio del cohort y la otra
integrante **deberá hacer un fork del repositorio de su compañera**. Luego de
esto, deberás
[configurar](https://help.github.com/articles/configuring-a-remote-for-a-fork/)
un `remote` hacia el repositorio del cual hiciste el fork.

Para mandar cambios desde un repositorio forkeado al original debes crear un
[pull request](https://goo.gl/4bYnuh)
y el propietario del repositorio original recibirá una notificación para
[revisar el pull request](https://goo.gl/XSFcT5)
y [aceptar los cambios](https://goo.gl/HLJtqN).

Aquí algunas recomendaciones para que organices mejor el trabajo con tu
compañera:

* En lugar de trabajar en una sola rama o _branch_, puedes organizar el flujo de
  trabajo con dos ramas principales:
  - `master`: rama que contiene las funcionalidades terminadas y sin errores.
  - `develop`: rama dónde integrarás las funcionalidades conforme las vayas
    desarrollando.

* Además de tener las dos ramas anteriores, puedes trabajar cada nueva
  funcionalidad en una rama individual (_feature branches_), estas ramas en
  lugar de crearse a partir de `master`, tienen a `develop` como su rama de
  origen. Cuando una funcionalidad es terminada se integra de nuevo a `develop`.
  Las _feature branches_ no se deben integrar directamente a `master`.

* Por último, te sugerimos codear usando la técnica de
  [pair programming](https://goo.gl/uAMBX2).

¿Quieres saber más forks y pull requests?

* Un [fork](https://help.github.com/articles/fork-a-repo/) es una copia de un
  repositorio en el que puedes experimentar sin afectar al repositorio original.
  Generalmente se usa para proponer cambios al proyecto de alguien más o para
  usar el proyecto de otra persona como punto de partida para una idea que
  quieras realizar.

* Un [pull request](https://help.github.com/articles/about-pull-requests/) (PR)
  te permite solicitar la inclusión de cambios al repositorio original (tu punto
  de partida) en GitHub. Cuando un PR es abierto, este permite solicitar,
  discutir y revisar los cambios realizados con todos los colaboradores y
  agregar otros commits antes de que los cambios sean incluidos al repositorio
  original.
-->

***

## Contenido de referencia

### Diseño de experiencia de usuario (User Experience Design)

* Investigación con usuarios / entrevistas
* Principios de diseño visual

### Desarrollo Front-end

* Unidad de testing en curso de JavaScript en LMS.
* Unidad de arreglos en curso de JavaScript en LMS.
* Unidad de objetos en curso de JavaScript en LMS.
* Unidad de funciones en curso de JavaScript en LMS.
* Unidad de DOM en curso de Browser JavaScript en LMS.
* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [Fetch API en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [json.org](https://json.org/json-es.html)

### Herramientas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)

***

## Checklist

* [ ] Usa VanillaJS.
* [ ] No hace uso de `this`.
* [ ] Pasa linter (`npm pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
>>>>>>> 62cdbd37178e7f5270318674305e4435f402f414
=======
>>>>>>> 82d8514ff0e6fbff47f14b5a3bf27e146b08313f
