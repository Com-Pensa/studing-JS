// The theme
function set_theme(color, image) {
    
    window.document.body.style.backgroundColor = `rgb(${color})`
    window.document.getElementById("main").src = `images/${image}.jpg`
}

function load_theme() {
    
    // Hour string:
    var hour = new Date().getHours()
    
    if (hour > 12)    var hour_string = `Now it's ${hour-12} PM`
    else              var hour_string = `Now it's ${hour} AM`
    
    window.document.querySelector("div#hours").innerHTML = hour_string
    
    // Color and image:
    if (6 < hour && hour < 12)            set_theme("40, 162, 192", "morning")
    else if (12 < hour && hour < 17)      set_theme("204, 202, 63", "afternoon")
    else if (17 < hour && hour < 20)      set_theme("74, 74, 74", "evening")
    else                                  set_theme("50, 50, 50", "night")
}
