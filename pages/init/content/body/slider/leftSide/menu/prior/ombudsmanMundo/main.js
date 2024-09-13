export default function ombudsmanMundo(){
    const ombudsmanMundo = document.createElement("div")
    ombudsmanMundo.innerHTML = "ombdsman no mundo"
    ombudsmanMundo.onclick = async function a(){
        let d = document.getElementById("1")
        d.style.transition = "translate var(--transitionTime)"
        d.style.translate = "0%"
        await new Promise(resolve => setTimeout(resolve, 500));
        document.getElementById("rightSide").innerHTML = ""
    }
    return(ombudsmanMundo)
}