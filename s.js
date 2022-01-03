let country =prompt(" write the name of country you want to know its weather ");

let wither = new XMLHttpRequest();

 let test = document.getElementById("test");
let result = ``;
 
wither.onreadystatechange = function () {
  if (wither.readyState == 4 && wither.status == 200) {
     let data1= JSON.parse(wither.responseText);
     let data2= JSON.parse(wither.responseText);
     let data3= JSON.parse(wither.responseText);

    data1= data1.location;
    data2=data2.current;


      result += `<div class="new">
     <h1> ${data1.name}</h1>
     <hr>
     <h3>Celsius :${data2.temp_c}</h3>
     <h3>Fahrenheit : ${data2.temp_f}</h3>
     <h3>Cloud  : ${data2.cloud}</h3>
    
     <h3>Description : ${data2.condition.text}</h3>

    
       </div>`;
    
    
    test.innerHTML = result;
  }
}
wither.open("GET", `http://ritter-cors-anywhere.herokuapp.com/https://api.weatherapi.com/v1/current.json?key=d66e52051d614209a3d195537212912&q=${country}&aqi=yes`);
wither.send();