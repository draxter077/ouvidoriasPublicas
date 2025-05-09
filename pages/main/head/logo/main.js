export default function logo(){
    let style = `
        {
            font-family:system-ui;
            font-size:40px;
            color:var(--colorWhite);
            font-weight:600;
        }
        :responsive{
            font-size:35px;
        }`

    const logo = cE("div", style)
    logo.innerHTML = "Ouvidorias Públicas"
    return(logo)
}