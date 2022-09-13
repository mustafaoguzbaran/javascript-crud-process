/*
employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
Bu veriyi okuyalım. (READ)
Bu veriyi güncelleyelim.
Dosyayı silelim.
*/
const fs = require("fs");
fs.writeFile("employees.json", '{"name": "Employee 1 Name", "salary": 2000}', "utf-8", (err) => {
    if (err) console.log(err)
    else console.log("File has been created")
})
fs.appendFile("employees.json", ',\n{"name": "Mustafa Oğuz", "salary": 5000}', "utf-8", (err, data) => {
    if (err) console.log(err)
    else console.log("File has been updated" + data)
})
fs.readFile("employees.json", "utf-8", (err, data) => {
    if (err) console.log(err)
    else console.log(data)
})
setTimeout(() => {
    fs.unlink("employees.json", (err) => {
        if (err) console.log(err)
        console.log("File has been deleted")
    })
}, 5000) 
