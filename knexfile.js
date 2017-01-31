// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'masa-db',
    },
    migrations: {
      directory: './migrations/'
    },
    seeds: {
      directory: './seeds/'
    } 
  }

};
