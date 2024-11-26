export default function title(t){
    let style = `
        {
            width: 100%;
            background: var(--colorWhite);
            height: fit-content;
            padding: 10px;
            border-radius: 15px;
            text-align: center;
            font-size: 25px;
            border: 4px solid var(--colorWhite);
            cursor: pointer;
            box-shadow: 0px 0px 10px 0px var(--colorBlack);
            transition: border-radius var(--transitionTime), border-radius var(--transitionTime), border var(--transitionTime);
        }
        :hover{
            border: 4px solid var(--colorOrange);
        }
    `

    const title = createElementToPage(undefined, "div", style, undefined)
    title.innerHTML = t
    title.onclick = async function a(Event){
        let ths = Event.target
        let upper = ths.parentElement.parentElement
        let body = ths.parentElement.children[1]
        let bodyNowMH = body.style.maxHeight
        if(bodyNowMH == "100%"){
            if(window.screen.width > 1000){body.parentElement.style.width = "30%"}
            body.style.padding = "0px"
            body.style.maxHeight = "0px"
        }
        else{
            for(let i = 0; i < upper.children.length; i++){
                if(upper.children[i].children[1].style.maxHeight == "100%"){
                    upper.children[i].children[1].style.maxHeight = "0px"
                    if(window.screen.width > 1000){upper.children[i].style.width = "30%";upper.children[i].children[1].style.padding = "0px"}
                    break;
                }
            }
            if(window.screen.width > 1000){body.parentElement.style.width = "80%";body.style.padding = "0px 10px 20px 10px"}
            body.style.maxHeight = "100%"
        }
    }
    return(title)
}