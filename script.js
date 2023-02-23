

const p1Click = () => {
    console.log("p1 clicked")
}

// const p2Click = () => {
//     console.log("p2 clicked")
// }

const setup = () => {
    console.log("Hello World")
    // list all the events
    $("#p1").dblclick(p1Click) // on double click, p1Click is a function handle
    $("#p2").click(() => {console.log("p2 clicked")}) // on single click, define the function
    // $("#p1").mouseenter(() => {console.log("p1 moused")})
    // $("#p2").mouseleave(() => {console.log("p2 left")})
    $("#p1").html("<span>wassup</span>")
    $("#thing").val("nnnnnn")
    $('ul').append("<li>goodbye</li>")
    $('ul').prepend("<li>hello</li>")
    $('ul').after("<p>yuh</p>")
    $('ul').before("<p>slay</p>")
    $("#p1").remove()
    $("#p2").hide()
    $("#p2").show()
    $("#p2").empty()
    $("li").addClass("border")
    $("#noclass").removeClass("border")
    $('input').css("border", "5px dashed pink")
    $("#second").parent().css("background-color", "white")
}

$(document).ready(setup) //when document is ready, can call a function