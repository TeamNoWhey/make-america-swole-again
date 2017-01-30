// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      // host: 'postgres://localhost/masa',
      // user: 'ForrestMac',
      database: 'masa-db',
      //REMINDER change back to masa-db
    },
    migrations: {
      directory: './migrations/'
    },
    seeds: {
      directory: './seeds/'
    } 
  }

  
  // development: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     '',
  //     password: ''
  //   },
  //   pool: {
  //     min: 1,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
