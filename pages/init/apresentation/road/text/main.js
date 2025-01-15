export default function text(){
    let style = `
        {
            background: var(--colorWhite);
            padding: 10px;
            border-radius: 0px 0px 10px 10px;
            box-shadow: 0px 0px 5px 0px var(--colorWhite);
            width: 60%;
        }
        :responsive{
            width: 100%;
            height: 50%;    
        }`

    const text = createElementToPage(undefined, "div", style)
    text.innerHTML = "Algum texto"
    return(text)
}