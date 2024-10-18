import option from "./option/main.js"

export default function lower(){
    document.getElementsByTagName("style")[0].innerHTML += `
    .initContentSliderLeftSideBodyMenuLower{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 50%;
        height: fit-content;
        margin: 10px 0px 0px 0px;
    }
    .initContentSliderLeftSideBodyMenuLower>div{
        width: 30%;
        text-align: center;
        background: var(--colorBlue);
        color: var(--colorWhite);
        padding: 10px 15px;
        border-radius: 15px;
        font-size: 21px;
        cursor: pointer;
        box-shadow: 0px 0px 5px 0px var(--colorBlack);
        transition: background var(--transitionTime);
    }
    .initContentSliderLeftSideBodyMenuLower>div:hover{
        background: var(--colorOrange);
    }
    
    @media screen and (max-width: 1000px){
        .initContentSliderLeftSideBodyMenuLower{
            flex-direction: column;
            width: 100%;
            margin: 0px;
        }
        .initContentSliderLeftSideBodyMenuLower>div{
            width: 100%;
            margin: 0px 0px 10px 0px;
        }
    }`

    const lower = document.createElement("div")
    lower.className = "initContentSliderLeftSideBodyMenuLower"
    lower.appendChild(option("Sobre nós"))
    lower.appendChild(option("Links"))
    lower.appendChild(option("Bibliografias"))
    return(lower)
}