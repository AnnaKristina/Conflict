window.onload = function () {
    alert("Hello")

    createPTag ();
}

function createPTag() {
    let PTag = document.createElement("p"); 

    PTag.innerHTML = "Lorem Ipsum";
    
    document.body.appendChild(PTag);
}