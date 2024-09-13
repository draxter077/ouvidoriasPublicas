export default function ombudsmanMundo(){
    const ombudsmanMundo = document.createElement("div")
    ombudsmanMundo.innerHTML = "ombdsman no mundo"
    ombudsmanMundo.onclick = function a(){
        let d = document.getElementById("1")
        d.style.transition = "translate var(--transitionTime)"
        d.style.translate = "0%"
    }
    return(ombudsmanMundo)
}