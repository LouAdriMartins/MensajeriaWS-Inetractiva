Mensajería de WS:

Dividimos nuestro chat en componentes para separar responsabilidades. Por el momento vamos a contar con 4 componentes:

- Componente 1: App.jsx
Inicialmente este va a ser nuestro componente principal, donde vamos a englobar toda la pantalla de mensajería. Más adelante separaremos esta responsabilidad haciendo uso de enrutamientos con diferentes pantallas, donde esta sería la pantalla ChatScreen.
En esta función se declara el estado y todas las funciones manejadoras que manejan a dicho estado para actualizarlo, como eliminar o agregar mensaje.
Luego en el return se llaman los componentes encargados de cada responsabilidad por sepaado para poder verlo en pantalla.
app llama al componente Chat y le pasa los mensajes para renderizar.
Por qué la función handleDeleteMEssage no la usamos en otro componente? Porque dentro de esta función usamos setMessages que es nuestra función actualizadora, por lo tanto, todo lo que llame a esta función actualizadora debe manejarse dentro de donde se haya declarado. No es una buena práctica pasar a un setter por props, lo recomendable es pasar funciones manejadoras que manejan el estado (usan ese setter).

- Componente 2: Chat.jsx
Este componente va a contener la lista de mensajes. Es aquí donde se va a realizar el mapeo para renderizar diche lista.
En este componente importamos a Message que contiene a cada mensajito, y dentro de la función creado se hace el mapeo de la lista de msjs:
Para hacer un mapeo debemos diferenciar a cada elemento, para esto usamos key.
Y como props hacemos pasar las props que ya creamos en Message.
Creamos un if que nos diga si la lista esta vacia, no hay msjs. A esto se le conoce como renderizado condicional. Si esta vacio muestra algo, si tiene msjs muestra el msj.
Este componente es llamado por app

- Componente 3: Message.jsx
Contiene cada mensajito por separado. 
Mensaje contiene un función que se encarga de guardar los parámetros o props: {emisor, hora, id, texto, status}. Y este msj es llamado en el Chat.
Se puede ver que las props se suelen desestructurar (en lugar de colocar props como argumento se colocan las propiedades bien definidades entre corchetes), de este modo ya cuando llame al componente en Chat me recomienda automaticamente que propiedades debo agregar en el componente para renderizarlo.
Dentro de mi return creo el html de como sería mi mensaje. Además agrego las clases para luego darle estilos.
En este componente además debemos llamar la función de eleiminar, porque es aquí donde tenemos el botón de eliminar. Pero la función de eliminación "handleDeleteMessage" está dentro del bloque de app, por lo tanto con un import no es suficiente. Para poder usar esta función en Chat la tenemos que pasar como propiedad al componente chat, a esto se le conoce como referenciación. En app referenciamos dentro del componente chat a las funciones messages y a handleDeleteMessages.
Luego handleDeleteMessage debe ser referenciada por props dentro del componente Chat.jsx y Message.jsx, sino no estaría vinculada a todo el proceso de mensaje.
Dentro button activamos el evento onClick donde se invoca como función anónima a la función manejadora que elimina el msj. Se usa una función anónima cuando queremos pasarle un parámetro a la función que debemos llamar (en este caso el parámetro a pasarse es el id de cada msj, esto identifica el msj que queremos eliminar) y estas funciones anónimas se activan sí o sí cuando yo pulse el botón, si no lo coloco como función anónima se activa de una sin que yo se lo ordene.

- Componente 4: NewMessageForm.jsx
Este será el formulario usado para añadir mensajes.
En este formulario se recomienda crear la función que previene la recarga de la página por defecto, debido al submit usado.

NOTAS:
1. Ya que usamos la función handleDeleteMessage en muchas partes de la página, esto desarrolla un problema llamado -prop drilling-, para resolverlo se debe usar Context, esta es una forma de transmitir datos de forma directa entre componentes hijos.

----------------------------------------------------
ENRUTAMIENTOS
----------------------------------------------------

