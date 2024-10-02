import option from "./option/main.js"
import ombudsmanWorld from "../../../../rightSide/ombudsmanWorld/main.js"
import ombudsmanBrazil from "../../../../rightSide/ombudsmanBrazil/main.js"

export default function prior(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderLeftSideBodyMenuPrior{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 0px 0px 10px 0px;
        }
        .initContentSliderLeftSideBodyMenuPrior>div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 18%;
            text-align: center;
            padding: 10px 15px;
            background: var(--colorWhite);
            border-radius: 15px;
            color: var(--colorBlue);
            transition: color var(--transitionTime), border var(--transitionTime);
            cursor: pointer;
            font-size: 21px;
            border: 2px solid var(--colorWhite);
        }
        .initContentSliderLeftSideBodyMenuPrior>div:hover{
            color: var(--colorOrange);
            border: 2px solid var(--colorBlue);
        }
        @media screen and (max-width: 1000px){
            .initContentSliderLeftSideBodyMenuPrior{
                flex-direction: column;
            }
            .initContentSliderLeftSideBodyMenuPrior>div{
                width: 100%;
                margin: 0px 0px 10px 0px;
            }
        }`

    const prior = document.createElement("div")
    prior.className = "initContentSliderLeftSideBodyMenuPrior"
    let ops = [{title: "Eventos", f: undefined}, 
                {title: "Notícias", f: undefined}, 
                {title: "Publicações", f: undefined}, 
                {title: "Ombudsman no mundo", f: ombudsmanWorld}, 
                {title: "Ombudsman no Brasil", f: ombudsmanBrazil}
            ]
    for(let i = 0; i < ops.length; i++){
        prior.appendChild(option(ops[i].title, ops[i].f))
    }
    return(prior)
}