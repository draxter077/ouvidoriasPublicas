import title from "./title/main.js"
import author from "./author/main.js"

export default function article(t, a){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:20%;
            cursor:pointer;
            transition:transform var(--transitionTime);
        }
        :hover{
            transform:scale(1.05);
        }
        :responsive{
            width:90%;
            margin:5px;
        }`

    const article = cE("div", style)
    article.appendChild(title(t))
    article.appendChild(author(a))
    return(article)
}