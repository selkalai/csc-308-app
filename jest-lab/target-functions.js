function div (a, b){
  return a / b;
}

function containsNumbers(text){
  for (let i = 0; i < text.length; i++) {
   if (!isNaN(text.charAt(i)))
    return true;
  }
  return false;
}

//exports: On the left, we define the name we want other modules to 
// call the function you're exporting. On the right, we 
// define the function we're exporting.

exports.div = div;
exports.containsNumbers = containsNumbers;