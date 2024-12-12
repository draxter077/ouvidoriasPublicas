import main from "./main/main.js"

export default function articles(){
    let style = `
        {
            display: flex;
            align-items: flex-end;
            width: 100%;
            height: 100dvh;
            padding: 0px 10px 10px;
            background: var(--backgroundColorBlue);
        }` 

    const articles = createElementToPage(undefined, "div", style)
    articles.id = "Artigos"
    articles.appendChild(main())
    return(articles)
}