
let name
let email
let tel 
let quantity
let commentaire =


addEventListener("submit", (e) => {
    let name = document.getElementsByName("name")[0]
    let email = document.getElementsByName("email")[0]
    let tel = document.getElementsByName("phone-number")[0]
    let quantity = document.getElementsByName("quantity")[0] 
    let commentaire = document.getElementsByName("comments")[0]
    const data = {
        "Name" : name,
        "Email" : email,
        "Tel" : tel,
        "Quantity" : quantity,
        "Commentaire" : commentaire
    }

    while(document.body.firstChild) {
        document.body.removeChild(document.body.lastChild)
    }
    const p = document.createElement("p")
    p.innerHTML = "Name: " + name.value
    document.body.appendChild(p)

    const p1 = document.createElement("p")
    p1.innerHTML = "Email: " + email.value
    document.body.appendChild(p1)

    const p2 = document.createElement("p")
    p2.innerHTML = "Telephone: " + tel.value
    document.body.appendChild(p2)

    const p3 = document.createElement("p")
    p3.innerHTML = "Quantity: " + quantity.value
    document.body.appendChild(p3)

    const p4 = document.createElement("p")
    p4.innerHTML = "Commentaire: " + commentaire.value
    document.body.appendChild(p4)
    e.preventDefault()
})