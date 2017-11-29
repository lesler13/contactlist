var express = require('express');
var router = express.Router();


let list = [
    {id:0, firstname : 'Ned', lastname : 'Stark', 
    email: 'ned@winterfell.com', phone: '123-456-7890', 
    url: 'www.google.com', notes: 'Winter is coming.'},
    
    {id:1, firstname : 'Theon' , lastname : 'Greyjoy', 
    email: 'tgreyjoy@winterfell.com', phone: '123-456-7890',
    url: 'www.google.com', notes: 'Reluctant to pay iron price.'},
    
    {id: 2, firstname : 'Samwell', lastname : 'Tarly', 
    email: 'starly@castleblack.com', phone: '123-456-7890', 
    url: 'www.google.com', notes: 'Loyal brother of the watch.'},
    
    {id: 3, firstname : 'Jon', lastname : 'Snow', 
    email: 'jsnow@castleblack.com', phone: '123-456-7890', 
    url: 'www.google.com', notes: 'Knows nothing.'},
    
    {id: 4, firstname : 'Arya', lastname : 'Stark', 
    email: 'waterdancer@winterfell.com', phone: '123-456-7890', 
    url: 'www.google.com', notes: 'Has a list of names.'},
    
    {id: 5, firstname : 'Jora', lastname : 'Mormont', 
    email: 'khaleesifan100@gmail.com', phone: '123-456-7890', 
    url: 'www.google.com', notes: 'Lost in the friend-zone.'},
    
    {id: 6, firstname : 'Tyrion', lastname : 'Lannister', 
    email: 'tyrion@lannister.com', phone: '123-456-7890', 
    url: 'www.google.com', notes: 'Currently drunk.'},
    
    {id: 7, firstname : 'Stannis', lastname : 'Baratheon', 
    email: 'onetrueking@dragonstone.com', phone: '123-456-7890', 
    url: 'www.google.com', notes: 'Nobody expects the Stannish inquisition.'},
    
    {id: 8, firstname : 'Hodor', lastname : 'bridget', 
    email: 'hodor@hodor.com', phone: '123-456-7890', 
    url: 'www.google.com', notes: 'Hodor? Hodor... Hodor!'},
    
    {id: 9, firstname : 'Margaery', lastname : 'Tyrell', 
    email: 'mtyrell@highgarden.com', phone: '123-456-7890', 
    url: 'www.google.com', notes: 'Keeper of kings.'},
    
    {id: 10, firstname : 'Brienne', lastname : 'Tarth', 
    email: 'oathkeeper@gmail.com', phone: '123-456-7890', 
    url: 'www.google.com', notes: 'Do not cross her.'},
    
    {id: 11, firstname : 'Petyr', lastname : 'Baelish', 
    email: 'petyr@baelishindustries.com', phone: '123-456-7890', 
    url: 'www.google.com', notes: 'Do not trust anyone.'},
];

//Develop GET /contacts API to list all contacts AND Develop GET /contacts?name= API to search contact by name
router.get('/', (req, res) => {
    
     var x = req.query.firstname;
      if(x != null)
      {
          for(var i=0; i<list.length; i++)
          {
              if(list[i].firstname == x)
              {
                  res.json(list[i]);
              }   
          }
      }
      else{
          res.json(list);
      }
     
  })
  
  //Develop GET /contact/:id API to get contact information
router.get('/:id', (req, res) => {
    
    res.json(list[req.params.id]);
    
 })

 //Develop POST /contacts API to create new contact
router.post('/', (req, res) => {
    var temp = 0;
    if(list.length){
    temp = parseInt(list[list.length - 1].id) + 1;
    }
        let  newList = {
            id : temp.toString(),
            firstname: req.body.firstname,
            lastname : req.body.lastname,
            email :    req.body.email,
            phone :    req.body.phone,
            url :      req.body.url,
            notes :    req.body.notes
        }
        list.push(newList);
    });

//Develop DELETE /contacts/:id API to remove contact from list
    router.delete('/:id', function (req, res) {
        for(var i=0;i<list.length;i++)
        {
            if(list[i].id == req.params.id){
            list.splice(i, 1);
            break;
        }
        }
    });


module.exports = router;