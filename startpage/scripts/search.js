function toggleEngine() {
  var gSearch = document.getElementById("gSearch");
  var logo = document.getElementById("engineLogo").src;
  localStorage.setItem('preferredEngine', logo);

  if (logo.indexOf("duck.svg") != -1) {
    document.getElementById("engineLogo").src = "icons/google.svg";
    gSearch.children[0].action = 'https://google.com/search';
  } else {
    document.getElementById("engineLogo").src = "icons/duck.svg";
    gSearch.children[0].action = 'https://duckduckgo.com/';
  }
  document.getElementById("textField").innerHTML = null;
}
