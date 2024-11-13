export default function img(parentClass){
    let style = `
        {
            height: 100%;
            opacity: 0.7;
        }`

    const img = createElementToPage(parentClass+">img", "img", style)
    img.src = "./imgs/stockholmPalace.jpg"
    return(img)
}