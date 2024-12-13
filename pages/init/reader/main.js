export default function reader(){
    let style = `
        {
            position: fixed;
            top: 0%;
            left: 0%;
            width: 100%;
            height: 100%;
            background: var(--colorWhite);
            translate: -100%;
            transition: translate var(--transitionTime);
        }`

    const reader = createElementToPage(undefined, "div", style)
    reader.onclick = function a(e){
        e.target.style.translate = "-100%"
    }
    return(reader)
}