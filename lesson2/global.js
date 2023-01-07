
//Me

//global object

// console.log(global);

//setTimeout with global object

// global.setTimeout(()=>{
//     console.log('in the time out')
// },3000)

//setTimeout without global object

// setTimeout(()=>{
//     console.log('in the timeout')
// },3000);

//setInterval without global object

// setInterval(() => {
//     console.log('in the setInterval')
// }, 1500);


setTimeout(() => {
    console.log('in the set time out');
    clearInterval(setIntv);
}, 2000);

const setIntv = setInterval(() => {
    console.log('in the set interval')
}, 1000);

//  __dirname & __filename

console.log(__dirname);
console.log(__filename);














// By Net Ninja

// const speak = () => {
//     console.log('hello, ninjas');
//   }
  
//   speak();
  
  // Global Object
  
  // console.log(global);
  
  // global.setTimeout(() => {
  //   console.log('in the timeout');
  // }, 3000);
  
//   setTimeout(() => {
//     console.log('in the timeout');
//     clearInterval(int);
//   }, 3000);
  
//   const int = setInterval(() => {
//     console.log('in the interval');
//   }, 1000);
  
//   console.log(__dirname);
//   console.log(__filename);
  
//   // no access to DOM methods
//   console.log(document.querySelector);