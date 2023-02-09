function displayresult(){
    var city=document.getElementById("city").value;
    var apikey='758e4d8e2e45b23022fe07a7afbd5725';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apikey+'&units=metric')
    .then(response=> response.json())
    .then(data=>{
        var t=data['main']['temp']
        var a=data['main']['temp_min']
        var b=data['main']['temp_max']
        document.getElementById("output").innerHTML="Current temperature is:"+t;
        document.getElementById("output1").innerHTML="The minimum temperature is:"+a;
        document.getElementById("output2").innerHTML="The maximum temperature is:"+b;
    })
}