export default function option(n){
    const option = document.createElement("div")
    option.className = "hoverChangeColorBlueToOrange"
    option.innerHTML = n
    option.onclick = function a(){
        let d = document.getElementById("1")
        d.style.transition = "translate var(--transitionTime)"
        d.style.translate = "-50%"
    }
    return(option)
}