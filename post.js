var connection = require('./connection.js');


function createPost(postType, postName, postPrice) {
    console.log("Inserting a new post...\n");

    var query = connection.query(
      "INSERT INTO post SET ?",
      {
        type: "postType",
        name: "postName",
        price: 10,
      },
      function(err, res) {
        console.log(res.affectedRows + "post created!\n");
        
      }
      
    );
  
    // logs the actual query being run
    console.log(query.sql);
  }


  module.exports = createPost();

  createPost("jobs", "wer,", 34);