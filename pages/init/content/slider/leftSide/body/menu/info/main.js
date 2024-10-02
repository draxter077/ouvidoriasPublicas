import option from "./option/main.js"

export default function info(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderLeftSideBodyMenuInfo{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 50%;
        }
        .initContentSliderLeftSideBodyMenuInfo>div{
            width: 30%;
            font-size: 18px;
            color: var(--colorWhite);
            padding: 10px 15px;
            border-radius: 15px;
            background: var(--colorBlue);
            text-align: center;
            font-weight: 900;
            transition: border var(--transitionTime);
            border: 2px solid var(--colorBlue);
            cursor: pointer;
        }
        .initContentSliderLeftSideBodyMenuInfo>div:hover{
            border: 2px solid var(--colorOrange);
        }
        @media screen and (max-width: 1000px){
            .initContentSliderLeftSideBodyMenuInfo{
                flex-direction: column;
                width: 100%;
            }
            .initContentSliderLeftSideBodyMenuInfo>div{
                width: 100%;
                margin: 0px 0px 10px 0px;
            }
        }`

    const info = document.createElement("div")
    info.className = "initContentSliderLeftSideBodyMenuInfo"
    let ops = ["Sobre nós", "Links", "Bibliografia"]
    for(let i = 0; i < ops.length; i++){
        info.appendChild(option(ops[i]))
    }
    return(info)
}