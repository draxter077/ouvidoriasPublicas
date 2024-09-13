import map from "./map/main.js"

export default function ombudsmanMundo(){
    const ombudsmanMundo = document.createElement("div")
    ombudsmanMundo.className = "width100 height100 backgroundColorWhite borderRadius15px padding10px15px flexColumn"
    ombudsmanMundo.innerHTML = "ombdsman no mundo"
    ombudsmanMundo.onclick = async function a(){
        let d = document.getElementById("1")
        d.style.transition = "translate var(--transitionTime)"
        d.style.translate = "0%"
        await new Promise(resolve => setTimeout(resolve, 400));
        document.getElementById("rightSide").innerHTML = ""
    }

    ombudsmanMundo.appendChild(map())
    return(ombudsmanMundo)
}