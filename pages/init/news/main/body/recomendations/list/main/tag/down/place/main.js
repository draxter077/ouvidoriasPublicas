export default function place(l){
    const place = createElementToPage(undefined, "div", undefined)
    place.innerHTML = l
    return(place)
}