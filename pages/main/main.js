import head from "./head/main.js"
import outdoor from "./outdoor/main.js"
import history from "./history/main.js"
import entities from "./entities/main.js"
import news_articles from "./news_articles/main.js"
import foot from "./foot/main.js"

export default function main(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
	        overflow:hidden;
        }`

    const main = cE("div", style)
    main.appendChild(head())
    main.appendChild(outdoor())
    main.appendChild(history())
    main.appendChild(entities())
    main.appendChild(news_articles())
    main.appendChild(foot())
    return(main)
}