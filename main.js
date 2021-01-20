/* Time getter */
function showDate() {
  var today = new Date();
  document.write(today.toDateString());
  console.log("Today's date is " + today);
}

const array1 = ['cow', 'dog', 'cat'];
const string1 = array1.join(', ');
console.log(string1);
const strint1ToArray  = string1.split(', ');
console.log(strint1ToArray);


// .push() &  .pop()
array1.pop();
console.log(array1);
array1.push('cat');
console.log(array1);

// .unshift() & .shift()

array1.unshift('cat');
console.log(array1);
array1.shift();
console.log(array1);
