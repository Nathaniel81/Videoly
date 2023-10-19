const menu = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

menu.onclick = function() {
	sidebar.classList.toggle('small-sidebar');
}


// menu.addEventListener("click", function() {
//   if (sidebar.style.width === '5%') {
//     sidebar.style.width = '15%';
//   } else {
//     sidebar.style.width = '5%';
//   }
// });
