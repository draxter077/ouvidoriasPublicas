import option from "./option/main.js"

export default function slide(parentClass, ob){
    let style = `
        {
            height: 100%;
            width: 100%;
            padding: 0px 10px;
            overflow: scroll;
        }
    `

    const slide = createElementToPage(parentClass+">div", "div", style)

    for(let i = 0; i < ob.length; i++){
        slide.appendChild(option(ob[i].img, ob[i].title, ob[i].content))
    }
    return(slide)
}