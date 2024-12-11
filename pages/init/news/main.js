import main from "./main/main.js"

export default function news(){
    let style = `
        {
            display: flex;
            align-items: flex-end;
            width: 100%;
            height: 100dvh;
            padding: 0px 10px 10px;
            background: orange;
        }` 

    const news = createElementToPage(undefined, "div", style)
    news.id = "Notícias"
    news.appendChild(main())
    return(news)
}