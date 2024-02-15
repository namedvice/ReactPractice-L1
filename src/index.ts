import {setupLoginForm} from "./login";
import {renderKnowledgePanel} from "./main";


//update UI depending on having been authorized
if (sessionStorage.getItem("authorizationKey") !== null) {
    document.getElementById("auth")!.remove()
    document.getElementById("signButton")!.remove()
    document.getElementById("mainButton")!.className = "pageButton_highlighted"
    void renderKnowledgePanel()
} else {
    document.getElementById("signButton")!.className = "pageButton_highlighted"
    document.getElementById("mainButton")!.remove()
    document.getElementById("knowledge")!.remove()
    document.getElementById("pagination")!.remove()
    setupLoginForm()
}






