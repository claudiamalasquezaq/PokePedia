# Data Lovers, viaje extendido

## Mejoras luego de la entrevista

- La página era responsive con issues, así que se editó el archivo _grid.css_ haciendo que para todos los tamaños de pantallas hayan 12 columnas.

![Responsive](https://i.ibb.co/C58hCNB/mejora1.jpg)

- Para obtener en un select todos los tipos de Pokémon, se usaban dos funciones (getTypes y uniqueTypes), se logró unir en una sola.

![Juntar dos funciones](https://i.ibb.co/z5WybST/mejora2.jpg)

- En el CSS, debe ir de lo más general (body, h1, h2, header, etc) a lo más específico (clases).  Deben hacerse los llamados por clases y no por id, para que luego el código sea reutilizable.


## HACKER EDITION

### Google Charts

Primero, se implementó un botón en el _index.html_ para ver data adicional, allí se debe mostrar solo el gráfico que muestre cuántos tipos de Pokemon hay y la cantidad que tiene cada uno.

![Interfaz con botón](https://i.ibb.co/vhD44z4/hacker1.jpg)

![Haciendo click en botón](https://i.ibb.co/8Pj2817/hacker2.jpg)

Issue: 
- El footer se desplaza hacia arriba.

### Llamando a la data mediante fetch