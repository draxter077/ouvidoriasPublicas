import back from "./back/main.js"

export default function top(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderRightSideOmbudsmanBrazilTop{
            margin: 0px 0px 10px 0px;
        }
        .initContentSliderRightSideOmbudsmanBrazilTop>button{
            background: var(--colorWhite);
            color: var(--colorBlue);
            cursor: pointer;
            transition: color var(--transitionTime);
        }
        .initContentSliderRightSideOmbudsmanBrazilTop>button:hover{
            color: var(--colorOrange);
        }`
    
    const top = document.createElement("div")
    top.className = "initContentSliderRightSideOmbudsmanBrazilTop"
    top.appendChild(back())
    return(top)
}