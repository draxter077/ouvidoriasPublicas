import img from "./img/main.js"
import tag from "./tag/main.js"
import toClick from "./toClick/main.js"

export default function main(e){
    let style = `
        {
            position: relative;
            width: 100%;
            height: 200px;
            margin: 0px 0px 20px 0px;
            cursor: pointer;
            color: var(--colorBlack);
            border-radius: 5px;
            box-shadow: 0px 0px 2px 0px var(--colorBlack);
            overflow: hidden;
            transition: box-shadow var(--transitionTime);
        }
        :hover{
            box-shadow: 0px 0px 10px 0px var(--colorBlue);
        }`

    const main = createElementToPage(undefined, "div", style)
    main.appendChild(img(e.img))
    main.appendChild(tag(e.title, e.date, e.location))
    main.appendChild(toClick(e.link))
    main.onmouseover = function a(e){
        e.target.parentElement.children[0].style.transform = "scale(1.05)"
    }
    main.onmouseout = function a(e){
        e.target.parentElement.children[0].style.transform = "scale(1)"
    }
    return(main)
}