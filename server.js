import app from './src/app.js' 
const port = process.env.PORT || 8000; //defin porta para o ambiente de produção ou teste 


app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
  })
