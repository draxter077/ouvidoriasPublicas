export default function time(t){
    let style = `
        {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            width: 100%;
            font-size: 15px;
            color: var(--colorBlack);
            font-style: italic;
            margin: 10px 0px;
        }
        >a{
            color: var(--colorBlue);
            transition: color var(--transitionTime);
        }
        >a:hover{
            color: var(--colorOrange);
        }`

    const time = createElementToPage(undefined, "div", style)
    time.innerHTML = t
    return(time)
}