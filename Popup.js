var css = document.createElement('style')
css.innerHTML =
'body {font-family: Arial, Helvetica, sans-serif;}\
.modal {\
  display: none; \
  position: fixed; \
  z-index: 1; \
  padding-top: 100px; \
  left: 0;\
  top: 0;\
  width: 100%; \
  height: 100%; \
  overflow: auto; \
  background-color: rgb(0,0,0); \
  background-color: rgba(0,0,0,0.4); \
}\
.modal-content {\
  background-color: #fefefe;\
  margin: auto;\
  padding: 20px;\
  border: 1px solid #888;\
  width: 80%;\
}\
.close {\
  color: #aaaaaa;\
  float: right;\
  font-size: 28px;\
  font-weight: bold;\
}\
.close:hover,\
.close:focus {\
  color: #000;\
  text-decoration: none;\
  cursor: pointer;\
}'

document.body.innerHTML = 
'<button id="myBtn">Open Modal</button>\
<div id="myModal" class="modal">\
<div class="modal-content">\
<span class="close">&times;</span>\
Name: <input type="text" id="name"></br></br>\
Email Id: <input type="text" id="name"></br></br>\
<button type="button" id="okbtn">Ok</button>\
</div>\
</div>'

document.head.appendChild(css);

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var okbtn = document.getElementById("okbtn");
okbtn.onclick = function(){
  modal.style.display = "none";
}
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}