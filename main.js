import construct from "./pages/construct.js"

axios.defaults.headers.common["ngrok-skip-browser-warning"] = "69420"
document.getElementsByTagName("head")[0].appendChild(document.createElement("style"))
construct()