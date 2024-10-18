export default function img(parentClass){
    let style = `
        {
            height: 100%;
            opacity: 0.7;
        }`

    const img = createElementToPage(parentClass+">img", "img", style, undefined)
    img.src = "https://draxter077.github.io/ouvidoriasPublicas/stockholmPalace.jpg"
    return(img)
}