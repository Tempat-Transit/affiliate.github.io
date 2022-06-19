function search(){
  document.getElementById('header').classList.add('hidden')
  document.getElementById('btn-search-active').classList.add('flex')
  document.getElementById('btn-search-active').classList.remove('hidden')
}

function back(){
  document.getElementById('header').classList.remove('hidden')
  document.getElementById('btn-search-active').classList.add('flex')
  document.getElementById('btn-search-active').classList.add('hidden')
}


function Dropdown() {
  document.getElementById('submenu').classList.toggle('hidden');
  document.getElementById('arrow').classList.toggle('rotate-0');
}

Dropwdown()

function opensidebar() {
  document.getElementById('open-sidebar').classList.remove('hidden')
  document.getElementById('icon-side').classList.add('lg:hidden')

}