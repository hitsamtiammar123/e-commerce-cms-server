const app=require('./app');
const PORT=process.env.PORT || 3001;
const http=require('http');
const server=http.createServer(app);

server.listen(PORT,()=>{
    console.log('Listening on port '+PORT);
})
