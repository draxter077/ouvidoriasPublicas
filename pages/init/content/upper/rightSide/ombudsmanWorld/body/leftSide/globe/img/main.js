export default function img(){
    let style = `
        {
            width: 100%;
            border-radius: 50%;
        }`

    const img = createElementToPage(undefined, "img", style)
    img.src = "https://draxter077.github.io/ouvidoriasPublicas/globe.jpg"
    return(img)
}