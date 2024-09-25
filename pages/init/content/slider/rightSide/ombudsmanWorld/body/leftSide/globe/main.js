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
            border-radius: 50%;
        }
            
        @media screen and (max-width: 1000px){
            .initContentSliderRightSideOmbudsmanWorldBodyLeftSideGlobe>img{
                margin: 0px 0px 10px 0px;
            }
        }`

    const globe = document.createElement("div")
    globe.className = "initContentSliderRightSideOmbudsmanWorldBodyLeftSideGlobe"
    globe.appendChild(img())
    return(globe)
}