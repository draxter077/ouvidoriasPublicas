export default function img(h){
    let style = `
        {
            width: 100%;
            height: 100%;   
            border-radius: 5px;
            transition: transform var(--transitionTime);
        }`

    const img = createElementToPage(undefined, "img", style)
    img.src = h
    return(img)
}