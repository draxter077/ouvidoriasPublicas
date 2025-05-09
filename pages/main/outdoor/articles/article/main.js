export default function article(){
    let style = `
        {
            width:20%;
            height:50px;
            background:black;
        }
        :responsive{
            width:40%;
            margin:5px;
        }`

    const article = cE("div", style)
    return(article)
}