const para = document.getElementById("demo");

function favoriteAnimal(animal){
    return `${animal} is my favorite animal!`;
}

para.textContent = favoriteAnimal('Dog');