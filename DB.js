var db = require('./database');

function App(){
	this.database = new DB();
}


function DB(){
	this.Driver = 'postgres';
	this.DB = 'App';
	this.DBHost = '127.0.0.1';
	this.DBPort = '5432';
	this.DBPath = '~/postgres/';
	this.DBUsername = 'user';
	this.DBPass = '';
}

DB.prototype.connect = function(){
	if (this.Driver === 'postgres'){
		var driver = new missy.drivers.PostgresDriver(),
	}
	var inquire = require('inquirer');
	var prompts = inquirer.prompt
}

var missy = require('missy').loadDriver('postgres')
var pg = require('pg');
    schema = new missy.Schema(driver, {});


var client = new pg.Client('postgres://user:pass@host/database');
    return function(){
        return Q.nmcall(client, 'connect')
            .thenResolve(client);
    ); // -> client 
});
// Initially, the schema is not connected 
var schema = new missy.Schema(driver);
