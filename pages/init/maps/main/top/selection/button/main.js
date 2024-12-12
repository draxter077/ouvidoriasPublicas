export default function button(t){
    const button = createElementToPage(undefined, "button", undefined)
    button.innerHTML = t
    button.onclick = function a(e){
        let children = e.target.parentElement.children
        for(let i = 0; i < children.length; i++){
            if(children[i] == e.target){
                e.target.style.background = "var(--colorBlue)"
                e.target.style.color = "var(--colorWhite)"
                if(e.target.innerHTML == "Brasil"){
                    e.target.parentElement.parentElement.parentElement.children[1].children[0].children[0].style.translate = "-50%"
                    e.target.parentElement.parentElement.parentElement.children[1].children[1].children[0].style.translate = "-50%"
                }
                else{
                    e.target.parentElement.parentElement.parentElement.children[1].children[0].children[0].style.translate = "0%"
                    e.target.parentElement.parentElement.parentElement.children[1].children[1].children[0].style.translate = "0%"
                }
            }
            else{
                children[i].style.background = "var(--colorWhite)"
                children[i].style.color = "var(--colorBlack)"
            }
        }
    }
    return(button)
}