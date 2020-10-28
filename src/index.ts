import express from 'express';

const app = express();

app.get('/', (request, response) =>{
  return response.json({message:'Vamos para o próximo nivel '});
})

app.listen(3331, () =>{
  console.log('O servidor está rodando na porta localhost:3331');
})
