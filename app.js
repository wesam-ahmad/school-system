let form =document.getElementById("InputForm");
let table = document.getElementById("table");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let name = event.target.name.value;
    let Datebrith = event.target.datebrith.value;
    let phone = event.target.phone.value;
    let grade = event.target.grade.value;
    let gender= event.target.flexRadioDefault.value;
    console.log(name, Datebrith, phone ,grade, gender);
    createTable(name, Datebrith,phone, grade, gender);

})

function createTable(name, Datebrith,phone, grade, gender){
         let row = document.createElement("tr");
         
         let c1 = document.createElement("td");
         let c2 = document.createElement("td");
         let c3 = document.createElement("td");
         let c4 = document.createElement("td");
         let c5 = document.createElement("td");        

            c1.innerText=name;
            c2.innerText=Datebrith;
            c3.innerText=phone;
            c4.innerText=grade;
            c5.innerText=gender;

            row.appendChild(c1);
            row.appendChild(c2);
            row.appendChild(c3);
            row.appendChild(c4);
            row.appendChild(c5);
            table.appendChild(row);
            form.reset ();
           

                       


}

    

    
