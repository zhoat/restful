var Http = require( "http" ),
    Router = require( "router" ),
    server,
    router;
router = new Router();

server = Http.createServer( function( request, response ) {
  router( request, response, function( error ) {
    if ( !error ) {
      response.writeHead( 404 );
    } else {
      // Handle errors
      console.log( error.message, error.stack );
      response.writeHead( 400 );
    }
    response.end( "RESTful API Server is running!" );
  });
});

server.listen( 3000, function() {
  console.log( "Listening on port 3000" );
});

var counter = 0,
    todoList = {};

function createItem( request, response ){
    var id = counter += 1;
    console.log( "Create item", id );
    response.writeHead(201, {
        "Content-Type" : "text/plan"
    });
    response.end( "Item" + id );
}
router.post( "/todo", createItem );
