class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}

let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let canada = new Country("Canada", "English and French", "Hello there, let's have some Tim Hortons and watch some hockey", ["black", "white", "red"]);
let finland = new Country("Finland", "Finnish", "Hei maailma", ["blue", "white", "lightblue"]);
let haiti = new Country("Haiti", "French and Haitian Creole", "Bonjou, lemonn", ["white", "blue", "red"]);
let india = new Country("India", "Hindi", "Namaste duniya", ["orange", "white", "green"]);
let zimbabwe = new Country("Zimbabwe", "Shona, Ndebele and English", "Mhoro, nyika ", ["green", "yellow", "red"]);

function DisplayColors(country)
{
   let colorNode1=document.getElementById("Color1");
   colorNode1.style.backgroundColor=country.colors[0];
   let colorNode2=document.getElementById("Color2")
   colorNode2.style.backgroundColor=country.colors[1];
   let colorNode3=document.getElementById("Color3")
   colorNode3.style.backgroundColor=country.colors[2];
}

function SwitchCountry() {
    let input = document.getElementById("CountryList").value;
    let countryNode = document.getElementById("CountryName");
    let languageNode = document.getElementById("OfficialLanguage");
    let helloNode = document.getElementById("HelloWorld");
    let country;
    DisplayColors(usa);
    //let colorNode1 = document.getElementById("Color1")
    //let colorNode2 = document.getElementById("Color2")
    //let colorNode3 = document.getElementById("Color3")
    //let cartNode = document.getElementById("cart");
    //cartNode.innerHTML = "";
    //let totalCost = 0;
    //cart.forEach(I =>{
        //cartNode.innerHTML += `<p>${I.name} ${I.price}</p>`
        //totalCost += I.price;
    //})
    //cartNode.innerHTML += `<p>total cost: ${totalCost}</P>`;
    
    if (input === "USA") {
        //set country to usa 
        countryNode.innerText = usa.name;
        languageNode.innerText = usa.lang;
        helloNode.innerText = usa.greeting;
        country = usa;
        DisplayColors(usa);
        //colorNode1.style.backgroundColor = usa.colors[0];
        //colorNode2.style.backgroundColor = usa.colors[1];
        //colorNode3.style.backgroundColor = usa.colors[2];
       
    }
    else if (input === "Canada") {
        countryNode.innerText = canada.name;
        languageNode.innerText = canada.lang;
        helloNode.innerText = canada.greeting;
        country = canada;
        DisplayColors(canada);
        //colorNode1.style.backgroundColor = canada.colors[0];
        //colorNode2.style.backgroundColor = canada.colors[1];
        //colorNode3.style.backgroundColor = canada.colors[2];
    }
    else if (input === "Finland") {
        countryNode.innerText = input;
        languageNode.innerText = finland.lang;
        helloNode.innerText = finland.greeting;
        country = finland;
        DisplayColors(finland);
        //colorNode1.style.backgroundColor = finland.colors[0];
        //colorNode2.style.backgroundColor = finland.colors[1];
        //colorNode3.style.backgroundColor = finland.colors[2];
    }
    else if (input === "Haiti") {haiti
        countryNode.innerText = input;
        languageNode.innerText = haiti.lang;
        helloNode.innerText = haiti.greeting;
        country = haiti;
        DisplayColors(haiti);
        //colorNode1.style.backgroundColor = haiti.colors[0];
        //colorNode2.style.backgroundColor = haiti.colors[1];
        //colorNode3.style.backgroundColor = haiti.colors[2];
    }
    else if (input === "India") {
        countryNode.innerText = input;
        languageNode.innerText = india.lang;
        helloNode.innerText = india.greeting;
        country = india;
        DisplayColors(india);
        //colorNode1.style.backgroundColor = india.colors[0];
        //colorNode2.style.backgroundColor = india.colors[1];
        //colorNode3.style.backgroundColor = india.colors[2];
    }
    else if (input === "Zimbabwe") {
        countryNode.innerText = input;
        languageNode.innerText = zimbabwe.lang;
        helloNode.innerText = zimbabwe.greeting;
        country = zimbabwe;
        DisplayColors(zimbabwe);
        //colorNode1.style.backgroundColor = zimbabwe.colors[0];
        //colorNode2.style.backgroundColor = zimbabwe.colors[1];
        //colorNode3.style.backgroundColor = zimbabwe.colors[2];
    }
}
