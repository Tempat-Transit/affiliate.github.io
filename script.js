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