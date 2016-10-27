var DSServer = require("deepstream.io");
var DSRethinkConnector = require("deepstream.io-storage-rethinkdb");

// Setup the deepstream server
var server = new DSServer();
server.set("host", "localhost");
server.set("port", 6020);

// Setup the RethinkDB storage connector
server.set("storage", new DSRethinkConnector({
    port: 28015,
    host: "localhost",
    splitChar: "/",
    defaultTable: "dsdemo"
}));

// Run the server
server.start();