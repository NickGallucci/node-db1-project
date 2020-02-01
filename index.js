const server = require('./server.js');

const PORT = process.env.PORT || 4000; //COULDNT GET SERVER TO RUN, finally figured out you need to do:   npm i dotenv package

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});