
import express from 'express' //Libreria espress, que permite el manejo de app
import ejs from 'ejs' //libreria ejs, que ayuda al manejo de hojas de codigo e intercambio de informacion entre frontend y backend
import {dirname, join} from 'path'  //dirname, que funciona para hacer referencia a otros archivos de codigo dentro del documento
import {fileURLToPath} from 'url' //file url ayuda a localizar los archivos index independiente el computador que este utilizando el codigo
import indexRoutes from './routes/index.js' // roytes permite localizar las rutas de acceso de los archivos

const app = express() //llamado a la libreria express

const __dirname = dirname(fileURLToPath(import.meta.url)) //declarando variable __dirname, que nos ayudará a usar la direccion de ruta automatica



app.set('views', join(__dirname, 'views') ) // enlace a la carpeta views, para las vistas que se tendran en front de los diferentes componentes de la pagina
app.set('view engine', 'ejs') // ejecucion de la libreria ejs
app.use(indexRoutes)



app.use(express.static(join(__dirname, 'public')))

app.listen(3000) // listen o escucha a un puerto de conexvion de la pagina
console.log("server is listen on port 3000"); // Mensaje a consola, para indicar que efectivamente esta en el puerto indicado




