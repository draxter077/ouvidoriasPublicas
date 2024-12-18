export default function date(d){
    const date = createElementToPage(undefined, "div", undefined)
    date.innerHTML = d
    return(date)
}