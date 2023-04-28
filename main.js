let data = [
    {
        name: "Brandon",
        age: 28
    },
    {
        name: "Batman",
        age: 50
    },
    {
        name: "Aquaman",
        age: 37
    }
];

/*Nu vill vi loopa igenom denna data*/

/*Traditionell for-loop
Med startvärde för x, ett condition när loopen ska ta slut, och vad som sker vid varje iteration.*/
for (let i = 0; i < data.length; i++) {
    console.log(data[i])
}

/*Array-metoden forEach*/
data.forEach((x, i) => {
    console.log(x);
    console.log(i);
})

//eller kortare variant
data.forEach((x) => console.log(x));

/* Om en metod INTE muterar vår data, behöver vi spara det i en 
variabel */

/*filter-metoden. Muterar EJ.*/
let heroes = data.filter(person => {
    return person.age > 30
})

/*Om en metod muterar datan - vill vi ofta skapa en array-kopia */
data.sort((a, b) => {
    return a.age - b.age;
})

/*Spread operator för att skapa kopia av arrayen
om vi ej vill mutera den ursprungliga arrayen*/
let sortedHeroes = [...data];
sortedHeroes.sort((a, b) => {
    return a.age - b.age;
});

/*Även om vi använder ursprungsdata i en funktion
så behöver vi skapa en kopia */

/*Funktion för att sortera*/
let sortArray = (arr) => {
    let arrayCopy = [...arr];
    return arrayCopy.sort((a, b) => {
        return a.age - b.age;
    });
};

let newArray = sortArray(data);
// console.log(newArray);
// console.log(data)

// console.log(heroes)
// console.log(data)

