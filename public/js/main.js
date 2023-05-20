const cityname = document.getElementById('cityname');
const city_names = document.getElementById('city_names');

const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');  

const datahide = document.querySelector('.b2'); 
const submitbttn = document.getElementById('submitbttn');

const getinfo = async(event)=>{
    event.preventDefault(); 
    // alert('hii');
    
    let cityval = cityname.value;

    if(cityval === '')
    {
      city_names.innerText = `plz write before search`;
      datahide.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=921ff3976d43bdc7c1bc5ab2bd3c0d68`;

            const response = await  fetch(url);
            const data = await response.json();
            const arr = [data];

            city_names.innerText = `${arr[0].name }, ${arr[0].sys.country}`;
            temp_real_val.innerText = arr[0].main.temp;
            temp_status.innerText = arr[0].weather[0].main;

            const tempmood = arr[0].weather[0].main;

            if(tempmood == "Clear"){
                temp_status.innerHTML = "<i class='fa-solid fa-sun'></i>";
            }else if(tempmood == "Clouds"){
                temp_status.innerHTML = "<i class='fa-solid fa-cloud'></i>";
            }
            else if(tempmood=="Rain"){
                temp_status.innerHTML = "<i class='fa-solid fa-cloud-rain'></i>";
            }
            else{
                temp_status.innerHTML="<i class='fa-solid fa-cloud'></i>";
            }
            datahide.classList.remove('data_hide');
        }
        catch
        {

            city_names.innerText = `plz write proper city name`;
            datahide.classList.add('data_hide');
        }
    }
}

submitbttn.addEventListener('click' , getinfo);


// date and day
const currday = document.getElementById("day");
const currdate = document.getElementById("date");
const getCurrentDay = ()=>{
    var weekday =new Array(7);
    weekday[0]="SUNDAY";
    weekday[1] = "MONDAY";
    weekday[2] = "TUESDAY";
    weekday[3] = "WEDNESDAY";
    weekday[4] = "THRUSDAY";
    weekday[5] = "FRIDAY";
    weekday[6] = "SATURDAY";
    
    let currentTime = new Date();
    let days = weekday[currentTime.getDay()];
    console.log(weekday[currentTime.getDay()]);
    return days;
}

currday.innerHTML =getCurrentDay(); 

const getCurrentTime = () =>{
    var months = [ 
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
    ]

    var now = new Date();
    var date = now.getDate();
    var month = months[now.getMonth()];
    return `${date} ${month}`;
}

currdate.innerHTML = getCurrentTime();