// Import y export son utilizados para trabajar con módulos, es decir: facilitan la modularización y organización del código al momento de desarrollar grandes aplicaciones.
// Permiten importar y exportar objetos, funciones, variables o clases entre diferentes archivos.
// Const se utiliza para declarar constantes que tendran valores que no pueden cambiar.
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'



// Estas líneas de código importan varios módulos y recursos necesarios para configurar y ejecutar una aplicación de servidor web.

// Se importa un objeto.
import { environments } from './src/config/environments.js' 
// Se importa una función llamada startDb.
import { startDb } from './src/config/database.js'
// Se importa un objet que contiene rutas y controladores.
import { userRouter } from './src/routes/users.routes.js'
// Se autentica el login y registro.
import { authRouter } from './src/routes/auth.routes.js'
// Importa un objeto que contiene rutas y controladores.
import { testRouter } from './src/routes/test.routes.js'

// Importa un módulo de JS, se asegura de que el código en tal módulo se ejecute con la carga de la aplicación sin utilizar lo que se encuentra en ese módulo de forma explicita.
import './src/models/User.js'

// Se crea una nueva instancia.
const app = express()

// Se configuran ciertas características y middlewares.
// La siguiente línea habilita el análisis automático de las solicitudes HTTP que llegan al servidor.
app.use(express.json());
app.use(
    // Medida de seguridad para prevenir solicitudes no autorizadas entre dominios diferentes. Se permite acceso desde cualquier origen "dominio" y solo se permiten métodos GET y POST.
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

// Se utiliza el middleware para la generación de registros (logs) de solicitudes HTTP entrantes. DEV: es una configuración de formato de registro que es más concisa y adecuada para el desarrollo, siendo útil para hacer un seguimiento sobre cada solicitud que llega al servidor y la depuración de algún error que pueda surgir.
app.use(morgan("dev"));
// Middleware que ayudan a mejorar la seguridad.
app.use(helmet());

// La solicitud que comience con /api/users sera manejada por userRouter.
app.use("/api/users", userRouter);
// La solicitud que comience con /auth sera manejada por authRouter.
app.use("/auth", authRouter);
// La solicitud que comience con /test sera manejada por testRouter
app.use("/test", testRouter);



// Se configura el servidor, también se utiliza una función async para realizar solicitudes HTTP cuando el servidor este listo.
app.listen(environments.PORT, async () => {
    // El mensaje que se mostrara por consola cuando el servidor se ejecute.
    console.log('SERVER RUN IN PORT: $envirometns.PORT')
})
