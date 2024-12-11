export default function button(t){
    const button = createElementToPage(undefined, "button", undefined)
    button.innerHTML = t
    button.onclick = function a(e){
        let children = e.target.parentElement.children
        for(let i = 0; i < children.length; i++){
            if(children[i] == e.target){
                e.target.style.background = "var(--colorBlue)"
                e.target.style.color = "var(--colorWhite)"
            }
            else{
                children[i].style.background = "var(--colorWhite)"
                children[i].style.color = "var(--colorBlack)"
            }
        }
    }
    return(button)
}