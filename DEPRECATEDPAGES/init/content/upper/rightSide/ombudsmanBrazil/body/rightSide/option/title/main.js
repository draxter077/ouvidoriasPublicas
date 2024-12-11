export default function title(t){
    let style = `
        {
            background: var(--colorBlue);
            border-radius: 15px;
            padding: 15px 20px;
            color: var(--colorWhite);
            font-weight: 900;
            transition: box-shadow var(--transitionTime);
            cursor: pointer;
        }    
        :hover{
            box-shadow: 0px 0px 10px 3px var(--colorOrange);
        }`

    const title = createElementToPage(undefined, "div", style)
    title.innerHTML = t

    title.onclick = function a(Event){
        const e = Event.target
        const eValue = e.parentElement.children[1].style.maxHeight
        const l = "200px"

        if(eValue == l){
            e.parentElement.children[1].style.maxHeight = "0px"
        }
        else{
            e.parentElement.children[1].style.maxHeight = l
        }
    }
    return(title)
}