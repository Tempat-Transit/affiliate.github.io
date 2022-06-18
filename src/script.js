function Menu(e) {
  let list = document.getElementById('menu-sidebar');
  let iconlist = document.getElementById('icon-sidebar');
  
  e.name === 'menu' ? (e.name = "close", iconlist.classList.add('invisible'), list.classList.remove('invisible') ) : (e.name = "menu", list.classList.add("invisible"), iconlist.classList.remove("invisible")
  )
} 