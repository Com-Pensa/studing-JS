// Day Hours Text
var hour_element = window.document.querySelector("div#hours")
var hour = new Date().getHours()

if (hour > 12)    var hour_string = `Now it's ${hour-12} PM`
else              var hour_string = `Now it's ${hour} AM`

hour_element.innerHTML = hour_string

// The theme
function set_theme(color, image) {
    
    window.document.body.style.backgroundColor = `rgb(${color})`
    window.document.getElementById("main").src = `images/${image}.jpg`
}
/* 
 * Images not included...
 */
if (hour < 12)      set_theme("40, 162, 192", "morning")

else if (hour < 17) set_theme("204, 202, 63", "afternoon")

else if (hour < 20) set_theme("74, 74, 74", "almost_night")

else                set_theme("50, 50, 50", "night")
