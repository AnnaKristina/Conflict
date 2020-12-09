window.onload = function () {
    alert("Hello")

    createPTag ();
    createWrapperAndPtag ();
}

function createPTag() {
    let PTag = document.createElement("p"); 

    PTag.innerHTML = "Lorem Ipsum";
    
    document.body.appendChild(PTag);
}

function createWrapperAndPTag() {

    let wrapper = document.createElement("div");
    
    wrapper.id = "wrapper";
    
    document.body.appendChild(wrapper);
    
    let PTag = document.createElement("p"); 
    
    PTag.innerHTML = "Lorem Ipsum";
    
    wrapper.appendChild(PTag);    
}