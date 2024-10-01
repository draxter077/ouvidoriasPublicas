import img from "./img/main.js"
import option from "./option/main.js"

export default function globe(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderRightSideOmbudsmanWorldBodyLeftSideGlobe{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            position: relative;
        }`

    const globe = document.createElement("div")
    globe.className = "initContentSliderRightSideOmbudsmanWorldBodyLeftSideGlobe"
    globe.appendChild(img())

    const c = [{t: "Argentina", top: "74%", left: "24%"},
            {t: "Brasil", top: "60%", left: "27%"}
            ]
    for(let i = 0; i < c.length; i++){
        globe.appendChild(option(c[i].t, c[i].top, c[i].left))
    }
    return(globe)
}