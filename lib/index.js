var Hapi = require('@hapi/hapi');

const init = async() => {
  const server = Hapi.server({
    port: 8082,
    host: '0.0.0.0'
  });

  await server.register([
    require('@hapi/vision'),
    require('@hapi/inert'),
    require('hapi-reveal')
  ]);

  await server.start();
  console.log("Presentation Started: " + server.info.uri);
  console.log("Hapi Version: "+server.version);
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();
