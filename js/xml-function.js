// JavaScript Document
function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "https://braddltu.github.io/LTU-dev/html/assessment-policies.html", true);
  xhttp.send();
}