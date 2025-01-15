export default function video(){
    let style = `
        {
            width: 60%;
            height: 60%;
            padding: 10px;
            background: var(--colorWhite);
            border-radius: 10px 10px 0px 0px;
            box-shadow: 0px 0px 5px 0px var(--colorWhite);
        }
        :responsive{
            width: 100%;
            height: 50%;
        }`
    const video = createElementToPage(undefined, "iframe", style)
    video.src = "https://www.youtube.com/embed/?autoplay=1"
    return(video)
}