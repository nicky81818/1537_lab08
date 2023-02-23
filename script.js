
function compute(id) {
    value1 = parseInt($("#first-operand").val())
    value2 = parseInt($("#sec-operand").val())
    switch (id) {
        case "plus":
            answer = value1 + value2
            operator = " + "
            break
        case "minus":
            answer = value1 - value2
            operator = " - "
            break
        case "multiply":
            answer = value1 * value2
            operator = " * "
            break
        case "divide":
            answer = value1 / value2
            operator = " + "
            break
    }
    message = "Result is " + value1 + operator + value2 + " = " + answer
    $("#result").html(message)
    $(".history").append("<p class=" + id + ">" + message + "<button class='hidebutt'>Hide this</button></p>")
}

const setup = () => {
    $("#plus").click(function () {
        compute(this.id)
    })
    $("#minus").click(function () {
        compute(this.id)
    })
    $("#multiply").click(function () {
        compute(this.id)
    })
    $("#divide").click(function () {
        compute(this.id)
    })
    $("body").on("click", ".hidebutt", function () {
        $(this).parent().remove()
    })
}

$(document).ready(setup)