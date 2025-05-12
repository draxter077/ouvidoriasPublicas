export default function map(){
    let style = `
        {
            width:30%;
            border-radius:15px;
            box-shadow:0px 0px 5px 0px var(--colorWhite);
        }
        :responsive{
            width:95%;
            margin:0px 0px 20px 0px;
        }`

    const map = cE("img", style)
    map.src = "https://media.istockphoto.com/id/1357215697/pt/vetorial/doodle-freehand-drawing-of-brazil-map.jpg?s=612x612&w=0&k=20&c=79P5qPmsz0iTthACt89oxcyjrsvGOG1gtLkLdD-yNUo="
    return(map)
}