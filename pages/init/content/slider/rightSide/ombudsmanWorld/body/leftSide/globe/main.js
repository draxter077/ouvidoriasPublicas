import img from "./img/main.js"

export default function globe(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderRightSideOmbudsmanWorldBodyLeftSideGlobe{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }
        .initContentSliderRightSideOmbudsmanWorldBodyLeftSideGlobe>img{
            width: 100%;
            border-radius: 15px;
        }
    `

    const globe = document.createElement("div")
    globe.className = "initContentSliderRightSideOmbudsmanWorldBodyLeftSideGlobe"
    globe.appendChild(img())
    return(globe)
}