const mongoose = require('mongoose');

require('dotenv').config({ path: 'variables.env' });

const conectarDB = async () => {
    try
    {
        console.log(process.env.DB_MONGO);
        await mongoose.connect(process.env.DB_MONGO, { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        
        });
        console.log('db conectada');
    }catch(error)
    {
        console.log(error);
        process.exit(1); //detener la app en caso de haber un error en la conexion
    }
}

module.exports = conectarDB;