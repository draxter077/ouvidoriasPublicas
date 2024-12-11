import option from "./option/main.js"

export default function slide(parentClass, ob){
    let style = `
        {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: flex-start;
            height: 100%;
            width: 100%;
            padding: 0px 10px;
            overflow-y: scroll;
            overflow-x: hidden;
        }
        :responsive{
            flex-direction: column;
            flex-wrap: nowrap;
        }
    `

    const slide = createElementToPage(parentClass+">div", "div", style)

    for(let i = 0; i < ob.length; i++){
        slide.appendChild(option(ob[i].img, ob[i].title, ob[i].content))
    }
    return(slide)
}