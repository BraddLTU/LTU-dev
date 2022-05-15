document.addEventListener('DOMContentLoaded', (event) => {
  let text;
  if (confirm("Press a button!") == true) {
    text = "You pressed OK!";
  } else {
    text = "You canceled!";
  }
  console.log(text);
});