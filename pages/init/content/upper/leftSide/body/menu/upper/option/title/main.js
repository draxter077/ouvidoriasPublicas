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
        let body = ths.parentElement.children[1]
        let bodyNowMH = body.style.maxHeight
        if(bodyNowMH == "100%"){
            body.style.maxHeight = "0px"
        }
        else{
            body.style.maxHeight = "100%"
        }
    }
    return(title)
}