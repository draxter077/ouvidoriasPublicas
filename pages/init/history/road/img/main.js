export default function img(){
    let style = `
        {
            height: 100%;
        }`

    const img = createElementToPage(undefined, "img", style)
    img.src = "./imgs/timeline.jpg"
    return(img)
}