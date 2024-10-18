import back from "./back/main.js"

export default function top(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderRightSideOmbudsmanWorldTop{
            margin: 0px 0px 10px 0px;
        }
        .initContentSliderRightSideOmbudsmanWorldTop>button{
            background: var(--colorWhite);
            color: var(--colorBlue);
            cursor: pointer;
            transition: color var(--transitionTime);
        }
        .initContentSliderRightSideOmbudsmanWorldTop>button:hover{
            color: var(--colorOrange);
        }`
    
    const top = document.createElement("div")
    top.className = "initContentSliderRightSideOmbudsmanWorldTop"
    top.appendChild(back())
    return(top)
}