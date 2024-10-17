import title from "./title/main.js"
import body from "./body/main.js"

export default function posts(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderLeftSideBodyMenuUpperPosts{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            width: 25%;
            height: 100%;
            margin: 0px 0px 10px 0px;
        }
        @media screen and (max-width: 1000px){
            .initContentSliderLeftSideBodyMenuUpperPosts{
                width: 100%;
            }
        }
    `

    const posts = document.createElement("div")
    posts.className = "initContentSliderLeftSideBodyMenuUpperPosts"
    posts.appendChild(title())
    posts.appendChild(body())
    return(posts)
}