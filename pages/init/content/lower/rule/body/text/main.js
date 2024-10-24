export default function text(t){
    let style = `
        {
            width: 100%;
            text-align: justify;
            margin: 10px 0px 0px 0px;
            color: var(--colorBlack);
        }
        >p{
            line-height: 1.3;
            text-indent: 30px;
            margin: 0px 0px 5px 0px;
        }`
    
    const text = createElementToPage(undefined, "div", style)
    text.innerHTML = t
    return(text)
}