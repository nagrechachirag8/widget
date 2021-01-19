var link1 = document.createElement('link');
link1.setAttribute('rel', 'stylesheet');
link1.setAttribute('href', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');

var script1 = document.createElement('script');
script1.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js');

var script2 = document.createElement('script');
script2.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js');

var script3 = document.createElement('script');
script3.setAttribute('src', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js');


var modelOpener = document.createElement('div');
modelOpener.setAttribute('class', 'model fade');
modelOpener.setAttribute('id', 'myModal');
modelOpener.setAttribute('data-backdrop', 'false')

modelOpener.innerHTML = '<div class="modal-dialog">\
<div class="modal-content">\
  <div class="modal-header">\
    <h4 class="modal-title">Modal Heading</h4>\
    <button type="button" class="close" data-dismiss="modal">×</button>\
  </div>\
  <div class="modal-body">\
    Name: <input type="text"></input>\
  </div>\
  <div class="modal-footer">\
    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>\
  </div>\
</div>\
</div>'

document.head.append(link1, script1, script2, script3)
document.body.appendChild(modelOpener);