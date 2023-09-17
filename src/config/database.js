import { Sequelize } from 'sequelize'
import { environments } from './environments.js'


// Se crea una instancia para conectar a una BD con valores proporcionados de los argumentos y en el objeto environments.
// Se exporta la constante llamada Sequelize y se crea una nueva para interactuar con la BS relacional.
export const sequelize = new Sequelize(
    // Nombre de la BD con la que se va a conectar.
    environments.DB.DB_NAME,
    // El nombre de usuario para conectarse.
    environments.DB.DB_USER,
//   La contraseña utilizada para conectarse.
  environments.DB.DB_PASSWORD,
  {
    host: environments.DB.DB_HOST,
    dialect: environments.DB.DB_DIALECT,
    port: environments.DB.DB_PORT
  }
)

// Esta línea exporta una función que estará disponible oara usar en otros módulos.
export async function startDb () {
    try {
        //   Manejar errores cuando se intente ejecutar el código dentro del bloque try y se manejara en catch.
        // La función await se utiliza para sincronizar el modelo con la BD para crear automaticamente las tablas en la BD.
        await sequelize.sync({ force: false })
        // El forse signifca que no se forzará la eliminación y recreación de las tablas si ya existen.
    } catch (error) {
        // Si ocurre algún error durante la sincronización se captura en el bloque catch y se muestra error por consola.
    console.log(error)
  }
}