import init from "./init/main.js"

export default async function construct(){
    const root = document.getElementById("root")
    const atts = window.location.href.split("?")[1]
    root.innerHTML = ""
    if(atts != undefined){
        const attsType = atts.split("=")[0]
        const attsValue = atts.split("=")[1]
    }
    else{
        root.appendChild(init())
    }
}