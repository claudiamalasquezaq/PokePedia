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
