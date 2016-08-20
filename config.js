// Ghost Configuration for Heroku

var path = require('path'),
    config,
    fileStorage,
    storage,
    config_mail;
    
if (!!process.env.GD_PRIVATE_KEY_ID) {
  fileStorage = true
  storage = {
    active: 'ghost-google-drive',
    'ghost-google-drive': {
      key: {
        "private_key_id": process.env.GD_PRIVATE_KEY_ID,
        "private_key": process.env.GD_PRIVATE_KEY,
        "client_email": process.env.GD_CLIENT_EMAIL,
        "client_id": process.env.GD_CLIENT_ID
      }
    }
  }
} else {
  fileStorage = false
  storage = {}
}

config_mail = {
  transport: 'SMTP',
  options: {
    service: 'Mailgun',
    auth: {
      user: process.env.MAILGUN_SMTP_LOGIN,
      pass: process.env.MAILGUN_SMTP_PASSWORD
    }
  }
}


config = {

  // Production (Heroku)
  production: {
    url: process.env.HEROKU_URL,
    mail: config_mail,
    fileStorage: fileStorage,
    storage: storage,
    database: {
      client: 'postgres',
      connection: process.env.DATABASE_URL,
      debug: false
    },
    server: {
      host: '0.0.0.0',
      port: process.env.PORT
    },
    paths: {
      contentPath: path.join(__dirname, '/content/')
    }
  },

  // Development
  development: {
    url: 'http://localhost:2368',
    database: {
      client: 'sqlite3',
      connection: {
        filename: path.join(__dirname, '/content/data/ghost-dev.db')
      },
      debug: false
    },
    server: {
      host: '127.0.0.1',
      port: '2368'
    },
    paths: {
      contentPath: path.join(__dirname, '/content/')
    }
  }

};

// Export config
module.exports = config;
