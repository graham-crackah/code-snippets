function App(){
	this.name = 'name';
	this.version = '1';
}

App.prototype.config = function(){
	
	var inquire = require('inquirer');
	var prompts = inquirer.prompt	if  (!fs.var conf = new Config();
}

const http = require('http');
const spawn = require('child_process').spawn;

const Config = require('./config/app');
const Port = 
const server = new Hapi.Server();
const chalk = require('chalk');



new Config();


server.connection({ port : Config.port});
const status = function (request, reply){
  console.log('--STATUS--');
}
const onRequest = function (request, reply) {
  const uri = request.raw.req.url;
  const parsed = Url.parse(uri, false);
  parsed.query = Qs.parse(parsed.query);
  request.setUrl(parsed);
  return reply.continue();
};
server.ext('onRequest', onRequest);
