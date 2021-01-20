/* Time getter */
function showDate() {
  var today = new Date();
  document.write(today.toDateString());
  console.log("Today's date is " + today);
}

console.log("Connected");

const students = ['Katy', 'Jackie', 'Sean', 'Nathan'];
console.log( students.length);

// ******* ACCESING ITEMS IN ARRAY 
console.log(students[1]);

console.log(students[students.length - 1]);
console.log(students[students.length - 1]); //Nathan
students[1] = 'Matthew';
console.log(students[1]);

const valuePrinter = (array, index) => {
  console.log(array[index]);
  return array[index];
}
valuePrinter(students,1);
valuePrinter([1,2,3,4,5,6], 4);
console.log(valuePrinter(students,2));

const arrayFindGreg = (array) => {
  for(let i = 0; i < array.length; i++)
    if(name === array[i]) {
      return array[i];
    } 
    return 'not found';
}
const arrayFindGreg2 = (array) => {
  return array.includes('Greg');
}
const arrayFind = (array, name) => {
  for(let i = 0; i < array.length; i++)
    if(name === array[i]) {
      return array[i];
    } 
    return 'not found';
}
console.log(arrayFind(students, 'Greg'));
students[students.length] = 'Greg';
console.log(arrayFind(students, 'Greg'));

const arrayFind2 = (array, name) => {
    if(array.includes(name)) {
      return true;
    }
    else return false;
}

console.log(arrayFind(students, 'Greg'));
console.log(arrayFind2(students, 'Greg'));
console.log(arrayFindGreg2(students));
