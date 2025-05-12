export default function option(){
    let style = `
        {
            width:95%;
            background:var(--colorWhite);
            font-size:20px;
            color:var(--colorBlue);
            padding:10px 15px;
            margin:5px;
            border-radius:5px;
        }
        :responsive{
            font-size:17px;
            padding:5px 10px;
        }`

    const option = cE("div", style)
    option.innerHTML = "Região 1"
    return(option)
}