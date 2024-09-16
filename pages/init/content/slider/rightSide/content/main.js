export default function content(){
    const content = document.createElement("div")
    content.className = "width100 height100 backgroundColorWhite borderRadius15px padding10px15px"
    content.innerHTML = "teste"
    content.onclick = function a(){
        let d = document.getElementById("initBodySlider")
        d.style.translate = "0%"
    }
    return(content)
}