var veryHungry = false;

function setup() {

  // Change these to change the title and author of the story
  document.getElementById('title').innerHTML="Little Red Riding Hood"; // title

  document.getElementById('author').innerHTML="Abou Diop"; // author


  
  // All of your code goes under here
  

  var story = 'The Little Red Robin Hood was looking for her way home than she came across a wolf after ' + many() + ' hour(s) of walking through the woods. Eventually the wolf follows her back home. ' + delicious(); // Create the text

  printToPage(story); // Print the text to the webpage
}



// Put your functions below here:

function many() {
  let hours = Math.floor(random(1, 6)); // Random number rounded down
  if(hours <= 2) {
    return 'She gets a ride to her grandmas house and gets there safely. The End'


  } else if(hours == 3 || hours ==4){
    return 'She meets the wolf on the way to her grandmas house'

    else if(hours ==5 || hours == 6) }
  return 'She gets lost after walking through the woods for too long'
}

function delicious() {
  if(veryHungry == true) {
    return "Soon after, the wolf ate the grandma before she could make it home. The End."
  } else {
    let inspection = inspects();
    return inspection;
  }
}

function inspects() {
  let insp = random(1, 6);
  if(insp > 5) {
    return "Little Red Riding Hood gets home and kills the grandma thinking that she was the wolf! The End."
  } else {
    return "Then, the wolf ate the girl and the grandma. The End."
  }
}


//Don't delete this!
function printToPage(story) {
  var para = document.createElement("P");
  var t = document.createTextNode(story);
  para.appendChild(t);
  document.getElementById("story").appendChild(para);
}    