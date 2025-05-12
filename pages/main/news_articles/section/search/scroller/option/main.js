export default function option(){
    let style = `
        {
            width:95%;
            background:var(--colorBlue);
            font-size:20px;
            color:var(--colorWhite);
            padding:10px 15px;
            margin:5px;
            border-radius:5px;
        }`

    const option = cE("div", style)
    option.innerHTML = "País 1"
    return(option)
}