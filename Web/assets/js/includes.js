var callonce;
window.onload = function () {
  callonce = false;
  includeHTML();
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            let content = this.responseText;
            $(elmnt).replaceWith(content);
            let filename = document.location.href.match(/([^\/]+)\..*$/)[1];
            let array = $("nav>div>ul>li").toArray();           
            for(let item of array) {
              if(callonce == true) break;
              console.log("item : " + item.innerText);
              if(item.innerText.toLowerCase() == filename.toLowerCase()) {
                item.classList.add("active");
                console.log(item.innerHTML + " is active");
                break;
              }
            }
            callonce = true;
          }
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};