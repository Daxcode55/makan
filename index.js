// full page tabs
function openPage(pagename, elmnt, color) {
    var i, tabcontents, tabmenus;

    tabcontents = document.querySelectorAll(".tabcontent");

    for (i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none";
    }

    tabmenus = document.querySelectorAll(".tabmenu");

    for (i = 0; i < tabmenus.length; i++) {
        tabmenus[i].style.backgroundColor = "";
    }

    document.getElementById(pagename).style.display = "block";
    elmnt.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click();

