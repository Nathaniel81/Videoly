const menu = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container')

menu.onclick = function() {
	sidebar.classList.toggle('small-sidebar');
	container.classList.toggle('large-container');
}


// menu.addEventListener("click", function() {
//   if (sidebar.style.width === '5%') {
//     sidebar.style.width = '15%';
//   } else {
//     sidebar.style.width = '5%';
//   }
// });
