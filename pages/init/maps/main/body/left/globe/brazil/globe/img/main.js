export default function img(){
    let style = `
        {
            height: 100%;
            border-radius: 50%;
        }
        :responsive{
            width: 100%;
        }`

    const img = createElementToPage(undefined, "img", style)
    img.src = "./imgs/brazil.jpg"
    return(img)
}