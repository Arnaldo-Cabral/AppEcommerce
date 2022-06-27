# Ecommerce hecho con React
Ecommerce de productos electrónicos con base de datos en Firebase.

## Ejecutar en Local
Para iniciar el proyecto:
```
$ git clone https://github.com/Arnaldo-Cabral/AppEcommerce/tree/EntregarProyecto
$ cd AppEcommerce
$ npm install
$ npm start
```

## Base de datos en Firebase
La base de datos deberá tener los siguientes datos.
```
$ Firestore Database crear la colección 'products'
$ Los productos deberan tener id autmático
Campo:  category string celular
        description string  Celular alta gama
        img string /images/samsung-s22.jpeg
        name string Samsung S22
        price number 150000
        stock number    30
```
Para crear la base de datos más fácil se dejo los datos en asyncmock.js

### Unir Base de datos con el proyecto
Crear un new file al mismo nivel que src con el nombre .env
el cual debera tener el siguiente formato y agregar los permisos de Firebase
```
REACT_APP_apikey=
REACT_APP_authDomain=
REACT_APP_projectId=
REACT_APP_storageBucket=
REACT_APP_messagingSenderId=
REACT_APP_appId=
```
### Breve descripcion de cada componente
```
En la ruta / es el inicio del proyecto, ahi se ve todos los productos (ItemListContainer)
En el ItemList se mapea todos los productos
En Item, ItemDetail se hace la card de los productos
En el ItemDetailContainer se muestra el detalle totel de cada producto seleccionado
ItemCount es el contador que se agrega a cada card para aumetar o disiminuir la cantidad selecionada de cada producto
```
### Gif de la aplicación
![alt text](/public/images/ReactApp.gif "Title")


