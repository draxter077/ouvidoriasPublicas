export default function option(t, top, left){
    const option = document.createElement("div")
    option.title = t
    option.style.top = top
    option.style.left = left

    option.onclick = function a(){
        const el = document.getElementById(t)
        el.scrollIntoView({behavior: "smooth"})
    }
    return(option)
}