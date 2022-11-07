module.exports = {
  apps : [{
    name   : "app1",
    script : "./app.js",
    exec_mode : "fork",
    // increment_var : "PORT",
    env : {
      "PORT" : "3000",
      "NODE_ENV" : "production"
    },
    // watch : true,
    // instances : 2,
    // log_file: "/home/user/PM2/logs.log",
    // time : true,
    // cron_restart: "* * * * *"
  }],
  deploy : {
    production : {
      "key"  : "/home/user/gti_key.pub",
      "user" : "user",
      "host" : ["127.0.0.1"],
      "path" : "/home/user/PM2/deploy",
      "ref"  : "origin/main",
      "repo" : "git@github.com:sriram1661/NodeJS.git",
      "post-deploy" : "npm install"
    }
  }
}
