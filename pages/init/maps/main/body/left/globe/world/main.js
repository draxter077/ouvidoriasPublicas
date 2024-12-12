import globe from "./globe/main.js"

export default function world(){
    let style = `
        {
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }`

    const world = createElementToPage(undefined, "div", style)
    world.appendChild(globe())
    return(world)
}