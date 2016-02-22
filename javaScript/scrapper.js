function scrap(){
  var link=document.getElementById("url");
$.ajax({
     url: "url",
     dataType: 'text',
     success: function(data) {
          var elements = $("<div>").html(data)[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
          for(var i = 0; i < elements.length; i++) {
               var theText = elements[i].firstChild.nodeValue;
               // Do something here
          }
     }
});
}
