import init from "./init/main.js"
import forms from "./forms/main.js"

export default async function construct(){
    const root = document.getElementById("root")
    const atts = window.location.href.split("?")[1]
    root.innerHTML = ""
    if(atts != undefined){
        const attsType = atts.split("=")[0]
        const attsValue = atts.split("=")[1]
        if(attsType == "p"){
            if(attsValue == "forms"){
                root.appendChild(forms())
            }
        }
    }
    else{
        root.appendChild(init())
    }
}