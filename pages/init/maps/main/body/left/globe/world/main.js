export default function world(){
    let style = `
        {
            width: 50%;
            height: 100%;
            background: green;
        }`

    const world = createElementToPage(undefined, "div", style)
    world.innerHTML = "Mundo"
    return(world)
}