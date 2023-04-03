function GetInfo(){
    const newname = document.getElementById("cityinput");
    const cityname = document.getElementById("cityname");
    cityname.innerHTML = "--"+ newname.value +"--";
    
    const backgroundImageUrl = "https://source.unsplash.com/1600x1000/?"+ newname.value;
    document.body.style.backgroundImage = `url('${backgroundImageUrl}')`;


    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+ newname.value +'&appid=aecc351980032b3f89a30c18e11f38aa')
        .then(response => response.json())
        .then(data =>{
             for(i = 0; i<5; i++){
                document.getElementById("day" + (i+1) + "min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 270.15).toFixed(1)+ "°";
            }

            for(i = 0; i<5; i++){
                document.getElementById("day" + (i+1) + "max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 270.75).toFixed(2) + "°";
            }

            for (let i = 0; i < 5; i++) {
                document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+ data.list[i].weather[0].icon +"@2x.png";
            }

        });

}

function defaultscreen(){
    document.getElementById("cityinput").defaultValue = "India";
    GetInfo();
}

var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

for(i = 0; i<5; i++){
    document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
}
