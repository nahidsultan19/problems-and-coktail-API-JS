const toggleSpnner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}

const searchDrink = () => {
    const inputValue = document.getElementById('search-input').value;
    document.getElementById('search-input').value = '';
    const error = document.getElementById('error')
    if (inputValue == '') {
        error.innerText = 'Please enter your drink, what you want..'
    } else {
        error.innerText = ''
        toggleSpnner('block');
        loadCoktail(inputValue);
    }
}




const loadCoktail = searchText => {
    // const inputValue = document.getElementById('search-input').value;
    // document.getElementById('search-input').value = '';
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => displayDrinks(data.drinks))

}
loadCoktail('margarita')

const displayDrinks = drinks => {
    console.log(drinks);
    const drinkContainer = document.getElementById('drinks-container');
    drinkContainer.textContent = '';
    drinks.forEach(drink => {
        console.log(drink);
        const div = document.createElement('div');
        div.classList.add('col-md-4');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${drink.strDrink}</h5>
                <p class="card-text">${drink.strInstructions}</p>
                <button onclick="drinkDetails('${drink.idDrink}')" class="btn btn-primary">Details</button>
            </div>
         </div>
        `;
        drinkContainer.appendChild(div);
    });
    toggleSpnner('none');
}

// drinks details

const drinkDetails = id => {
    console.log(id);
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDrinkDetails(data))
}

const displayDrinkDetails = id => {
    console.log(id);
    const drinkDetails = document.getElementById('drink-details')
    drinkDetails.innerHTML = `
    <div class="card h-100">
        <img src="${id.strDrinkThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${id.strDrink}</h5>
            <p class="card-text">paa</p>
            <p class="card-text">para</p>
           
        </div>
    </div>
    `;
}
