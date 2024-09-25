import img from "./img/main.js"

export default function globe(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderRightSideOmbudsmanBrazilBodyLeftSideGlobe{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            height: 80%;
        }
        .initContentSliderRightSideOmbudsmanBrazilBodyLeftSideGlobe>img{
            height: 100%;
            border-radius: 50%;
        }
            
        @media screen and (max-width: 1000px){
            .initContentSliderRightSideOmbudsmanBrazilBodyLeftSideGlobe>img{
                margin: 0px 0px 10px 0px;
            }
        }`

    const globe = document.createElement("div")
    globe.className = "initContentSliderRightSideOmbudsmanBrazilBodyLeftSideGlobe"
    globe.appendChild(img())
    return(globe)
}