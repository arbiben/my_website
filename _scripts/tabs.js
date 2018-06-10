
// this is a comment
var tabLink;
var tavPanels;

window.onload = function(){
  // set initial panel state
  // linsten for hever over tab
  tabLinks = 
    document.getElementById("tabs").getElementsByTagName("li");
  for (var i=0; i< tabLinks.length; i++){
    console.log(tabLinks[i]);
    tabLinks[i].onclick = function(){
     console.log("clicked on link"); 
    }
  }
}

function hoverOverTab(){
  // respont to tab hover
  // change color displayed

}
