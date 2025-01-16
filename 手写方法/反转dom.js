function reverseDom(el){
    var frag = document.createDocumentFragment()
    while(el.lastChild){
        frag.appendChild(el.lastChild)
    }
    el.appendChild(frag)
}