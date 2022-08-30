
function _animate(_status)
{
    
    var elemId= document.getElementById("frame0");
   if(_status==1){
    elemId.classList.add("extended");
    var classList = 'classList' in elemId;
    for (var i = 0; i < elemId.children.length; i++) {
    var child = elemId.children[i];
    if (child.tagName == 'DIV') {
    if (classList) {      
        var tmp =   "extended"+i;
        child.classList.add(tmp);                                  
    } else {
      child.className += tmp;
    }}}
    }
    else if(_status==0)
    {
        elemId.classList.remove("extended");
        var classList = 'classList' in elemId;
        for (var i = 0; i < elemId.children.length; i++) {
        var child = elemId.children[i];
        if (child.tagName == 'DIV') {
        if (classList) {      
            var tmp =   "extended"+i;
            child.classList.remove(tmp);                                  
        } else {
        child.className -= tmp;
    }}} 
   
    }
}