export default function option(t, f){
    const option = document.createElement("button")
    option.innerHTML = t
    option.onclick = function a(){
        let d = document.getElementById("initBodySlider")
        d.style.translate = "-50%"
        let rightSide = document.getElementById("rightSide")
        rightSide.innerHTML = ""
        rightSide.appendChild(f())
    }
    return(option)
}