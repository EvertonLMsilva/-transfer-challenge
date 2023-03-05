import ExpressAdapter from "./infra/api/ExpressAdapter"

const httpServer = new ExpressAdapter();

httpServer.on('get', '/user', async (params: any, body: any) =>{
  console.log('GET - ');

  return "Hello World";
  
})

httpServer.listen(3000);

console.info('--- Server listen on port 3000 ---')