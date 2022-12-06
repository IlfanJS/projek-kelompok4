function onFormSubmit(e){
    e.preventDefault()
    const name = $("#name")
    const email = $("#email")
    const phone = $("#phone")
    const message = $("#message")

    if($(name).val()){
        alert("Name is required")
    } else if ($(email).val()){
        alert("Email is required")
    } else if ($(phone).val()){
        alert("Phone is required")
    } else if($(message).val()){
        alert("message is required")
    } else {
        alert("Form Submitted")
        $(name).val("")
        $(email).val("")
        $(phone).val("")
        $(message).val("")
        

    }

}