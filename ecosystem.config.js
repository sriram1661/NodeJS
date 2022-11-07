module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'user',
      host : '192.168.248.141',
      ref  : 'origin/main',
      repo : 'git@github.com/Surya5602/Basicnodeapp.git',
      path : '/home/user/PM2/deploy',
      "post-deploy" : "pm2 start index.js"
    }
  }
};