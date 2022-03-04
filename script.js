// const example1Span = document.querySelector('#example-1 span');
// example1Span.textContent = localStorage.getItem('example-1-number') ?? 0;
// document.querySelector('#example-1 button').addEventListener('click', function() {
//   example1Span.textContent++;
//   localStorage.setItem('example-1-number', example1Span.textContent);
// });


// const example2Span = document.querySelector('#example-2 span');
// example2Span.textContent = localStorage.getItem('example-2-number') ?? 0;
// document.querySelector('#example-2 button').addEventListener('click', function() {
//   example2Span.textContent--;
//   localStorage.setItem('example-2-number', example2Span.textContent);
// });

// const inputExample = document.querySelector('#example-3 input');
// inputExample.value = localStorage.getItem('example-3-text')
// inputExample.addEventListener('input', function() {
//   localStorage.setItem('example-3-text', inputExample.value);
// });

// const darkTheme = document.querySelector('input[type=checkbox]');
// // Remember
// darkTheme.checked = localStorage.getItem('dark-theme');
// document.body.classList.toggle('dark-theme', darkTheme.checked);
// // React
// darkTheme.addEventListener('change', function() {
//   localStorage.setItem('dark-theme', +darkTheme.checked);
//   document.body.classList.toggle('dark-theme');
// })

const timeoutExample = setTimeout(function() {
  document.querySelector('span').textContent = 'Hello';
}, 2000); // 1
// console.log(timeoutExample);
document.querySelector('button').addEventListener('click', function() {
  clearTimeout(timeoutExample);
});

let timeoutId;
document.querySelector('#example-5 button').addEventListener('click', function(){
  this.textContent = 'Generating...';
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    this.textContent = Math.random() * 100;
}, 1000);
});

const span = document.querySelector('#example-6 span');
const interval = setInterval(() => {
  span.textContent++;
}, 1000);
document.querySelector('#example-6 button').addEventListener('click', function(){
  clearInterval(interval);
});
