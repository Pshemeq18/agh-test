class country
{
    constructor(id, name, nationalanimal, motto, population)
    {
        this.id = id,
        this.name = name,
        this.nationalanimal = nationalanimal,
        this.motto = motto,
        this.population = population
    }
}
countries = [new country(0, "Algeria", "Fennec fox", "By the people and for the people", "40,400,000"), 
             new country(1, "Mexico", "Xoloitzcuintli", "The Homeland is First", "119,539,753"),
             new country(2, "Moldova", "Aurochs", "Our Language is a treasure", "2,913,281"),
             new country(3, "Scotland", "Unicorn", "In my defence God me defend", "5,317,600")];
function nextcountry()
{
    id = document.getElementById("td0").textContent;
    if (id ==="-")
    {
        id = -1;
    }
    else if (id == 3)
    {
        id = -1;
    }
    id = Number(id);
    document.getElementById("td0").textContent = countries[id+1].id;
    document.getElementById("td1").textContent = countries[id+1].name;
    document.getElementById("td2").textContent = countries[id+1].nationalanimal;
    document.getElementById("td3").textContent = countries[id+1].motto;
    document.getElementById("td4").textContent = countries[id+1].population;
}
function changecolor(id, color)
{
    const elem = document.getElementById(id);
    elem.style.background = color;
}

const API_URL = "https://jsonplaceholder.typicode.com/users";

fetch(API_URL)
    .then(function (response) 
    {
        return response.json();
    })
    .then(function(data) {
        console.log("data", data)
    })
    .catch(function(){
        console.log("Error");
    });