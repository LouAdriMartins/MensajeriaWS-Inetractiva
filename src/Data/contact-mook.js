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
import alcaldeImg from './Images/alcalde.jpg'
import mojoJojoImg from './Images/mojo-jojo.jpg'
import beloImg from './Images/belo.jpg'
//------------------------------------------------------------------------------------------------------------------------------------

const mook_data = {
    contacts: [
        {
            id: 1,
            name: 'Bombon',
            image_route: bombonImg,
            phone: '+54 299 563 8542',
            info: '¡No puedo recordar nada! Y eso que yo recuerdo todo lo que hice en la vida.',
            info_date: '20 de mayo del 2015',
            hora: '01/06/2025',
            last_message: {
                id: 1,
                text: 'Hola Bombon, como estas?',
                status: true,
            },
            unread_messages: 2,
            messages: [
                {
                    emisor: 'YO',
                    hora: '01/06/2025',
                    text: 'Hola que tal?',
                    status: true,
                },
                {
                    id: 2,
                    emisor: 'Bombon',
                    hora: '01/06/2025',
                    text: 'Todo bien, y vos?',
                    status: true,
                },
            ],
        },
        {
            id: 2,
            name: 'Burbuja',
            image_route: burbujaImg,
            phone: '+54 294 423 8025',
            info: '¡La vida es tan lindaaaa!',
            info_date: '30 de junio del 2018',
            hora: '02/07/2025',
            last_message: {
                id: 2,
                text: 'Hola, qué tal?',
                status: false,
            },
            unread_messages: 1,
            messages: [
                {
                    id: 1,
                    emisor: 'YO',
                    hora: '02/07/2025',
                    text: 'Si, hoy aprendí estados',
                    status: true,
                },
                {
                    id: 2,
                    emisor: 'Burbuja',
                    hora: '02/07/2025',
                    text: '¡Qué bueno! Me alegro',
                    status: false,
                },
            ],
        },
        {
            id: 3,
            name: 'Bellota',
            image_route: bellotaImg,
            phone: '+54 263 555 2082',
            info: '¡A pelear!',
            info_date: '02 de enero del 2019',
            hora: '05/05/2025',
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
                    hora: '05/05/2025',
                    text: 'Eso que significa?',
                    status: false,
                },
                {
                    id: 2,
                    emisor: 'Bellota',
                    hora: '05/05/2025',
                    text: 'Que tenemos que juntarnos a conversar ❤️',
                    status: false,
                },
            ],
        },
        {
            id: 4,
            name: 'Prof. Plutonio',
            image_route: plutonioImg,
            phone: '+54 685 326 2856',
            info: '¡Azúcar, flores y muchos colores!',
            info_date: '15 de abril del 2020',
            hora: '25/06/2025',
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
                    hora: '25/06/2025',
                    text: 'Hola, ¿cómo has estado?',
                    status: true,
                },
                {
                    id: 2,
                    emisor: 'Prof. Plutonio',
                    hora: '25/06/2025',
                    text: 'Muy bien, ocupado creando!',
                    status: true,
                },
            ],
        },
        {
            id: 5,
            name: 'Mojo-jojo',
            image_route: mojoJojoImg,
            phone: '+54 333 256 1234',
            info: 'Jajaja... ¡Soy demasiado listo para ustedes!',
            info_date: '05 de junio del 2016',
            hora: '04/04/2025',
            last_message: {
                id: 5,
                text: 'Buenas noches, como sigues?',
                status: true,
            },
            unread_messages: 0,
            messages: [
                {
                    id: 1,
                    emisor: 'YO',
                    hora: '04/04/2025',
                    text: 'Todo muy bien, y tu?',
                    status: true,
                },
                {
                    id: 2,
                    emisor: 'Mojo-jojo',
                    hora: '04/04/2025',
                    text: 'Bien, ya casi termino la tarea de Front-End.',
                    status: true,
                },
            ],
        },
        {
            id: 6,
            name: 'El Alcalde',
            image_route: alcaldeImg,
            phone: '+54 662 823 5325',
            info: '¡Alcalde quiere brindis!',
            info_date: '03 de agosto del 2014',
            hora: '25/05/2025',
            last_message: {
                id: 6,
                text: 'Hola, hoy es un día patrio. Podemos comer locro!',
                status: true,
            },
            unread_messages: 0,
            messages: [
                {
                    id: 1,
                    emisor: 'YO',
                    hora: '25/05/2025',
                    text: 'Si, me encanta la idea.',
                    status: true,
                },
                {
                    id: 2,
                    emisor: 'El Alcalde',
                    hora: '25/05/2025',
                    text: 'Perfecto, nos juntamos en casa de Mojo para cocinar.',
                    status: true,
                },
            ],
        },
        {
            id: 7,
            name: 'Srta. Belo',
            image_route: beloImg,
            phone: '+54 321 523 2525',
            info: '¡Oh señor alcalde, tenemos una emergencia!',
            info_date: '08 de Octubre del 2016',
            hora: '01/01/2025',
            last_message: {
                id: 7,
                text: 'Feliz año nuevo!',
                status: true,
            },
            unread_messages: 0,
            messages: [
                {
                    id: 1,
                    emisor: 'YO',
                    hora: '23:13',
                    text: 'Muchas gracias, igual para vos!',
                    status: true,
                },
                {
                    id: 2,
                    emisor: 'Srta. Belo',
                    hora: '23:16',
                    text: 'Gracias, nos vemos pronto.',
                    status: true,
                },
            ],
        },
    ]
}

export default mook_data