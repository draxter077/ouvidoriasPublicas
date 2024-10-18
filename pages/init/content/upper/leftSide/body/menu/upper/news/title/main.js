export default function title(){
    let style = `
        {
            background: var(--colorWhite);
            height: fit-content;
            padding: 15px;
            border-radius: 15px;
            text-align: center;
            font-size: 27px;
            border: 4px solid var(--colorWhite);
            cursor: pointer;
            box-shadow: 0px 0px 10px 0px var(--colorBlack);
            transition: border-radius var(--transitionTime), border-radius var(--transitionTime), border var(--transitionTime);
        }
        :hover{
                border: 4px solid var(--colorOrange) !important;
        }
    `

    const title = createElementToPage(undefined, "div", style, undefined)
    title.innerHTML = "Notícias"
    title.onclick = function a(Event){
        let ths = Event.target
        let body = ths.parentElement.children[1]
        let bodyNowMH = body.style.maxHeight
        if(bodyNowMH == "1000px"){
            body.style.maxHeight = "0px"
            ths.style.borderRadius = "15px"
            ths.style.border = "4px solid var(--colorWhite)"
        }
        else{
            ths.style.borderRadius = "15px 15px 0px 0px"
            ths.style.border = "4px solid var(--colorOrange)"
            body.style.maxHeight = "1000px"
        }
    }
    return(title)
}