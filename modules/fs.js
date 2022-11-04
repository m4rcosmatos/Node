const fs = require('fs');
const path = require('path');


// Criar Pasta 

fs.mkdir(path.join(__dirname, "/test"),(error)=>{
    if(error){
      return console.log('erro:',error)
    }
    console.log('PAsta criada com sucesso.')
});

fs.writeFile(path.join(__dirname,'/test','test.txt'), 'hello node', (error)=>{
    if(error){
      return console.log('erro:',error)
    }
    console.log('Arquivo criado com sucesso.')
} );

fs.appendFile(path.join(__dirname,'/test','test.txt'), 'hello word', (error)=>{
    if(error){
      return console.log('erro:',error)
    }
    console.log('Arquivo modificado com sucesso.')
} );
