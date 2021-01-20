/* Time getter */
function showDate() {
  var today = new Date();
  document.write(today.toDateString());
  console.log("Today's date is " + today);
}

//console.log("Connected");
// for(let i = 0; i <=15; i++) {
//   console.log(i);
// }

// const functionforTad = () => {
//  for(let i = 0; i <=15; i++) {
//    console.log(i);
//  }
// }
//  functionforTad();

//  // ************* ARRAYS WITH LOOPS *************
//  const ec14Instructors = ['Aja','Trinity', 'Dr.T', 'Discussion Tickets'];
//  for(let i = 0 ; i < ec14Instructors.length; i++) {
//    console.log(ec14Instructors[i]);
//  }


 // *************** ARRAYS, LOOPS, FUNCTIONS ***************

 const colors = ['red','orange','yellow','green','blue','purple'];
 const colorLoop = () => {
   let domString ='';
   for (let i =0 ; i < colors.length; i++) {
     domString += `<h1>${colors[i]}</h1>`;
   }
   console.log(domString);
 }
colorLoop();
 const instructors = [
   { first: 'Trinity', last: 'Christiana' },
   { first: 'Aja', last: 'Washington' },
   { first: 'Teresa', last: 'Vasquez' },
 ];

const nameLoop = () => {
  let domString = '';
  for(let i = 0; i < instructors.length; i++) {
    domString += `<h1>${instructors[i].first} ${instructors[i].last}</h1>`;
  }
  console.log(domString);
}
nameLoop();
