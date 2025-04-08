// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = true;
  }
}



// // Theme Changer 

function click(){
    let input = document.getElementById("first").value;
    document.body.style.background=input;
}

document.body.addEventListener("click",click);







// dark mode theme   
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  
  // Check for saved theme preference
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
  
  // Toggle theme on button click
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    // Save preference
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
  
  // Optional: Watch for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) { // Only if user hasn't set preference
      document.body.classList.toggle('dark-mode', e.matches);
    }
  });
});
