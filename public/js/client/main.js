var host = location.origin.replace(/^http/, 'ws')
var ws = new WebSocket(host);

  $('.control').on('click',function(e){
    e.preventDefault();
    var fn = $(this).data('fn');
    FS.send(ws,fn);
    return false;
  });


$('#search').on('submit',function(e){
  e.preventDefault();
  var q = $('#q').val();
  FS.send(ws,q);
  $('#q').val("");
  return false;
});
