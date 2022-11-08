const mongoose = require('mongoose')

const connectToDatabase = async () =>{
    await mongoose.connect(`mongodb+srv://m4rcosmatos:${process.env.M_PASSWRD}@cluster0.e1gjg9v.mongodb.net/?retryWrites=true&w=majority`, 
        (error) =>{
            if(error){
                return console.log('ocorreu um erro:', error);

            }
            return console.log('conexao reaizada');

    });
};

module.exports = connectToDatabase;