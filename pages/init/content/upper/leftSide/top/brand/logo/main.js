export default function logo(){
    let style = `
        {
            height: 55px;
            margin: 0px 10px 0px 0px;
        }
    `

    const logo = createElementToPage(undefined, "img", style)
    logo.src = "./imgs/icon.png"
    return(logo)
}