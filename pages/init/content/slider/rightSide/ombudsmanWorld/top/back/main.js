export default function back(){
    const back = document.createElement("button")
    back.className = "backgroundNone hColorBlueToColorOrange fontSize18px"
    back.innerHTML = "Voltar"
    back.onclick = function a(){
        document.getElementById("initBodySlider").style.translate = "0%"
    }
    return(back)
}