function display(string){
    document.getElementById(string).style.display = "initial"
    document.getElementById(string + "taskbar").style.display = ""
    document.getElementById(string + "taskbar").classList.remove("taskbutton-outset")
    document.getElementById(string + "taskbar").classList.add("taskbutton-inset")
}

function hide(string){
    document.getElementById(string).style.display = "none"
    document.getElementById(string + "taskbar").style.display = "none"
}

function minimize(string){
    if (document.getElementById(string).style.display == "none") {
        document.getElementById(string).style.display = ""
        document.getElementById(string + "taskbar").style.display = ""
        document.getElementById(string + "taskbar").classList.remove("taskbutton-outset")
        document.getElementById(string + "taskbar").classList.add("taskbutton-inset")
    }
    else if (document.getElementById(string).style.display == "initial" || document.getElementById(string).style.display == "") {
        document.getElementById(string).style.display = "none"
        document.getElementById(string + "taskbar").classList.add("taskbutton-outset")
        document.getElementById(string + "taskbar").classList.remove("taskbutton-inset")
    }
}