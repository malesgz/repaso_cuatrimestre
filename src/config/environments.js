import 'dotenv/config'

// Estas líneas de código se utlizan para configurar las variables de entorno y se la exportan en el objeto llamado "environments" que contendra estas configuración.

export const environments = {
    PORT: process.env.PORT || 3000,
    // Es una clave secreta que se suele utilizar para la autenticación o para cifrar datos.
    SECRET: process.env.SECRET || 'ññññ',
//   Este objeto tiene configuraciones relacionadas con la base de datos.
  DB: {
    DB_NAME: process.env.DB_NAME || 'db',
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_DIALECT: process.env.DB_DIALECT || 'mysql',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || 'root',
    DB_PORT: process.env.DB_PORT || 3306
  }
}