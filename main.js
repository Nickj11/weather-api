console.log("Hello world")
let weather = {
    apikey: 'a750fff189fe07b2fc05bda2bee26e29'
};


const Getweather = async (e) => {
    e.preventDefault();
    const city = e.target.weather.value
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=a750fff189fe07b2fc05bda2bee26e29`
    res = await fetch(url)
    const data = await res.json();
    // console.log(data)

    const location = data.name;
    const current_temp = data.main.temp;
    const max_temp = data.main.temp_max;
    const min_temp = data.main.temp_min;
    const type_weather = data.weather['0'].main;
    const description = data.weather['0'].description;
    const icon = data.weather['0'].icon
    // console.log(location,current_temp,max_temp,min_temp,type_weather,descrip,icon)

    const myweather = {
        location: location,
        current_temp: current_temp,
        max_temp: max_temp,
        min_temp: min_temp,
        type_weather: type_weather,
        description: description,
        icon: icon

    }
    addtopage(myweather)
};


const addtopage = (w) => {
    console.log(w)
    const card = document.createElement('div')
    card.innerHTML = `    <div class="card" style="width: 18rem;">
  <img src="http://openweathermap.org/img/wn/${w.icon}@2x.png" class="card-img-top" alt="${w.location}">
  <div class="card-body">
    <h5 class="card-title">${w.location}</h5>
    <p class="card-text"> Current temperature ${w.current_temp}°F <br> max temperature ${w.max_temp}°F <br> Mininum temperature ${w.min_temp}°F  <br> ${w.description}  </p>
  </div>
</div>`
    const container = document.querySelector('.container');
    if (container.innerHTML !== ' ') {
        container.innerHTML = ' '
    }
    container.append(card)
};

const weatherform = document.getElementById('weatherform');
weatherform.addEventListener('submit', Getweather)