export default function option(d, f){
    const option = document.createElement("div")
    if(f != undefined){
        option.onclick = function a(){
            let d = document.getElementById("initBodySlider")
            d.style.translate = "-50%"
            let rightSide = document.getElementById("rightSide")
            rightSide.innerHTML = ""
            rightSide.appendChild(f())
        }
    }
    option.innerHTML = d
    return(option)
}