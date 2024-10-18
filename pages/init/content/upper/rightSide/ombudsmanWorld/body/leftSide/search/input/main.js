export default function input(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderRightSideOmbudsmanWorldBodyLeftSideSearch>input{
            width: 100%;
            border-radius: 10px;
            border: 1px solid var(--colorBlue);
            padding: 10px 15px;
            transition: box-shadow var(--transitionTime);
        }
        .initContentSliderRightSideOmbudsmanWorldBodyLeftSideSearch>input:hover{
            box-shadow: 0px 0px 10px 0px var(--colorOrange);
        }`

    const input = document.createElement("input")
    input.placeholder = "Pesquise um país"
    input.addEventListener("input", function a(Event){
        const inp = Event.target.value
        const e = document.getElementById(inp.toLowerCase())
        if(e != null){
            e.scrollIntoView({behavior: "smooth"})
            e.children[1].style.maxHeight = "200px"
        }
    })
    return(input)
}