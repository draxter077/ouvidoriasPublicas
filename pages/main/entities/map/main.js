export default function map(){
    let style = `
        {
            width:60%;
            aspect-ratio:2;
            border-radius:15px;
        }
        :responsive{
            width:95%;
            margin:0px 0px 20px 0px;
        }`

    const map = cE("img", style)
    map.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/A_large_blank_world_map_with_oceans_marked_in_blue.PNG/1200px-A_large_blank_world_map_with_oceans_marked_in_blue.PNG"
    return(map)
}