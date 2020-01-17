/* 
Drawbacks of switch statement-
1. Non standard syntax (verbose syntax).
2. Error prone ex.leave off break, then its hard to debug in large switch
*/

/* Object literal is alternative to switch statement */


const dogSwitch = breed => {
    var obj = {
    "border": "Border Collies are good boys and girls.",
    "pitbull": "Pit Bulls are good boys and girls.",
    "german": "German Shepherds are good boys and girls."
  }
  
 return obj[breed];

}
  
 console.log(dogSwitch("border")); 