export default function option(){
    let style = `
        {
            width: 20%;
            border: 1px solid var(--colorBlack);
            border-radius: 5px;
            margin: 0px 5px 5px 0px;
            background: none;
            cursor: pointer;
        }`

    const option = createElementToPage(undefined, "button", style)
    option.innerHTML = "opção"
    return(option)
}