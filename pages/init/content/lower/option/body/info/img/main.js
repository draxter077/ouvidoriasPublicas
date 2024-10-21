export default function img(){
    let style = `
        {
            width: 30%;
            margin: 20px 0px 0px 0px;
            border-radius: 15px;
            box-shadow: 0px 0px 5px 0px var(--colorBlack);
        }
        :responsive{
            width: 100%;
        }`

    const img = createElementToPage(undefined, "img", style)
    img.src = "https://www.novida.com.br/wp-content/uploads/2020/03/Alocacao-de-Pessoas.jpg"
    return(img)
}