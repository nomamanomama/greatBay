var connection = require('./connection.js');


function createPost(postType, postName, postPrice) {
    console.log("Inserting a new post...\n");

    var query = connection.query(
      "INSERT INTO posts SET ?",
      {
        type: postType,
        name: postName,
        price: postPrice,
      },
      function(err, res) {
        
      }
      
    );

  }


  module.exports = createPost();

  createPost("jobs", "wer,", 34);
  readPost();

  function readPost() {
    console.log("Selecting all playlist...\n");
    connection.query("SELECT * FROM posts", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);


    });
  }