export default function option(){
    const option = document.createElement("div")
    option.className = "height100 width100 borderRadius15px backgroundColorWhite padding10px15px"
    option.innerHTML = "Voltar"

    option.onclick = function a(){
        let d = document.getElementById("1")
        d.style.transition = "translate var(--transitionTime)"
        d.style.translate = "0%"
    }
    
    return(option)
}