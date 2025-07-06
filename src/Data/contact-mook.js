//----------------------------------------------------DATOS DE CADA CONTACTO----------------------------------------------------------
// Archivo: src/Data/contact-mook.js
//      En este archivo se encuentran los datos de cada contacto que se muestra en la pantalla principal de la aplicacion. Puede verse 
// como una base de datos.
//------------------------------------------------------------------------------------------------------------------------------------
// Importación de imágenes para los contactos
import bombonImg from './Images/bombon.webp'
import burbujaImg from './Images/burbuja.png'
import bellotaImg from './Images/bellota.jpg'
import plutonioImg from './Images/plutonio.jpg'
// import alcaldeImg from './Images/alcalde.jpg'
// import mojoJojoImg from './Images/mojo-jojo.jpg'
// import beloImg from './Images/belo.jpg'
// import elImg from './Images/el.jpg'
//------------------------------------------------------------------------------------------------------------------------------------

const mook_data = {
    contacts: [
        {
            id: 1,
            name: 'Bombon',
            image_route: bombonImg,
            last_message_date: '01/06/2025',
            last_message: {
                id: 1,
                text: 'Hola Bombon, como estas?',
                status: true,
            },
            unread_messages: 2,
            messages: [
                {
                    emisor: 'YO',
                    hora: '23:10',
                    texto: 'Hola que tal?',
                    status: true,
                },
                {
                    id: 2,
                    emisor: 'Bombon',
                    hora: '23:15',
                    texto: 'Todo bien, y vos?',
                    status: true,
                },
            ],
        },
        {
            id: 2,
            name: 'Burbuja',
            image_route: burbujaImg,
            last_message_date: '02/07/2025',
            last_message: {
                id: 2,
                text: 'Hola, qué tal?',
                status: false,
            },
            unread_messages: 1,
            messages: [
                {
                    id: 1,
                    emisor: 'USUARIO',
                    hora: '23:11',
                    texto: 'Si, hoy aprendí estados',
                    status: true,
                },
                {
                    id: 2,
                    emisor: 'Burbuja',
                    hora: '23:13',
                    texto: '¡Qué bueno! Me alegro',
                    status: false,
                },
            ],
        },
        {
            id: 3,
            name: 'Bellota',
            image_route: bellotaImg,
            last_message_date: '05/05/2025',
            last_message: {
                id: 3,
                text: 'Hola, te extraño 😿',
                status: false,
            },
            unread_messages: 0,
            messages: [
                {
                    id: 1,
                    emisor: 'YO',
                    hora: '23:12',
                    texto: 'Eso que significa 🤓?',
                    status: false,
                },
                {
                    id: 2,
                    emisor: 'Bellota',
                    hora: '23:14',
                    texto: 'Que te extraño mucho ❤️',
                    status: false,
                },
            ],
        },
        {
            id: 4,
            name: 'Prof. Plutonio',
            image_route: plutonioImg,
            last_message_date: '25/06/2025',
            last_message: {
                id: 4,
                text: 'Tanto tiempo!!!',
                status: true,
            },
            unread_messages: 2,
            messages: [
                {
                    id: 1,
                    emisor: 'YO',
                    hora: '23:13',
                    texto: 'Hola, ¿cómo has estado?',
                    status: true,
                },
                {
                    id: 2,
                    emisor: 'Prof. Plutonio',
                    hora: '23:16',
                    texto: 'Muy bien, ocupado creando!',
                    status: true,
                },
            ],
        },
    ]
}

export default mook_data