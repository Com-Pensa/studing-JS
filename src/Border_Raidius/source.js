var radius_camp = window.document.querySelector("input#input_radius")
var main_square = window.document.getElementById("previewer")
main_square.style.borderRadius = "100px"

function preview()
{   
    var radius = Number.parseInt(radius_camp.value)
    main_square.style.borderRadius = `${radius}px`
}
