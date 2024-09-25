export default function back(){
    const back = document.createElement("button")
    back.innerHTML = "Voltar"
    back.onclick = function a(){
        document.getElementById("initBodySlider").style.translate = "0%"
    }
    return(back)
}