function Student(name,Datebrith,phone,image,gender,major){
    this.name=name;
    this.Datebrith=Datebrith;
    this.phone=phone;
    this.image=image;
    this.gender=gender;
    this.major=major;
}

let form =document.getElementById("InputForm");
let card = document.getElementById("card");
form.addEventListener("submit", function(event){
    event.preventDefault();
    let name = event.target.name.value;
    let Datebrith = event.target.datebrith.value;
    let phone = event.target.phone.value;
    let image = "stdimage.png";
    // const image = document.createElement("img");
    //   image.src = "stdimage.png";
    //   card.appendChild(image);
    let gender= event.target.flexRadioDefault.value;
    let  major =event.target.major1.value;
   // form.reset();
    let arrData = [];
    if(localStorage.getItem('arrData') != null) {
    arrData = JSON.parse(localStorage.getItem('arrData'));
    }
    let new_student = new Student(name,Datebrith,phone,image,gender,major);
    arrData.push(new_student);
    localStorage.setItem('arrData',JSON.stringify(arrData) );
    render(name,Datebrith,phone,image,gender,major);

});
ShowLocalStorage();

function ShowLocalStorage(){
    if(localStorage.getItem('arrData')){
        let arrData = JSON.parse(localStorage.getItem('arrData'));
        for(let i=0;i<arrData.length;i++){
            render(arrData[i].name,arrData[i].Datebrith,arrData[i].phone,arrData[i].image,arrData[i].gender,arrData[i].major)
        //   alert(arrData[i].name + arrData[i].Datebrith + arrData[i].phone +arrData[i].gender)
            //  createTable(arrData[i].name,arrData[i].Datebrith,arrData[i].phone,arrData[i].grade,arrData[i].gender);
          
                                
                            




       
      }
      
    
}

}

function render(name,Datebrith,phone,imageurl,gender,major) {
    let  image = document.createElement("img");
          image.src = imageurl;
          card.appendChild(image);

          let ul=document.createElement("ul");
          let li=document.createElement("li");
          let li1=document.createElement("li");
          let li2=document.createElement("li");
          
          let li4=document.createElement("li");
          let li5=document.createElement("li");

                    li.innerText=`name : ` + name;
                    li1.innerText=` Datebrith: ` + Datebrith;
                    li2.innerText=`phone number: ` + phone;
                   
                    li4.innerText=`Gender: ` + gender;
                    li5.innerText= `Major: ` + major;

                                ul.appendChild(li);
                                ul.appendChild(li1);
                                ul.appendChild(li2);
                                
                                ul.appendChild(li4);
                                ul.appendChild(li5);

                                card.appendChild(ul);
}
// let grade = event.target.grade.value;
  //console.log(name, Datebrith, phone , gender);
    
  //  createTable(name, Datebrith,phone, grade, gender);

// function createTable(name, Datebrith,phone, grade, gender){
//          let row = document.createElement("tr");
         
//          let c1 = document.createElement("td");
//          let c2 = document.createElement("td");
//          let c3 = document.createElement("td");
//          let c4 = document.createElement("td");
//          let c5 = document.createElement("td");        

//             c1.innerText=name;
//             c2.innerText=Datebrith;
//             c3.innerText=phone;
//             c4.innerText=grade;
//             c5.innerText=gender;

//             row.appendChild(c1);
//             row.appendChild(c2);
//             row.appendChild(c3);
//             row.appendChild(c4);
//             row.appendChild(c5);
//             table.appendChild(row);
//             form.reset ();
           
// }


    

    
