export default function up(t){
    const up = createElementToPage(undefined, "div", undefined)
    up.innerHTML = t
    return(up)
}