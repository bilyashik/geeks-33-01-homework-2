// задание 1

var color = prompt("введите цвет (красный/желтый/зеленый)");

if (color === "красный") {
    alert("СТОЙ!")
} else if (color === "желтый") {
    alert("Жди!")
} else if (color === "зеленый") {
    alert("Иди!")
} else {
    alert("некорректный цвет")
}


// задание 2

var askNumer = prompt("введите число от 1 до 9")

if (askNumer === "1") {
    alert("I")
} else if (askNumer === "2") {
    alert("II")
} else if (askNumer === "3") {
    alert("III")
}  else if (askNumer === "4") {
    alert("IV")
} else if (askNumer === "5") {
    alert("V")
} else if (askNumer === "6") {
    alert("VI")
} else if (askNumer === "7") {
    alert("VII")
} else if (askNumer === "8") {
    alert("VIII")
} else if (askNumer === "9") {
    alert("IX")
} else {
    alert("ошибка! введите число от 1 до 9")
}

// задание 3

var cardType = prompt("введите тип вашей карты (silver/gold/platinum)")
var liters = parseFloat(prompt("введите количество литров"))

if (isNaN(liters) || liters <= 0) {
    alert("некорректное количсество литров. введите положительное число!");
} else {
    var pointsPerLiter
}

if (cardType === "silver") {
    pointsPerLiter = 0.5
} else if (cardType === "gold") {
    pointsPerLiter = 0.75
} else if (cardType === "platinum") {
    pointsPerLiter = 1
} else {
    alert("некорректный тип карты. пожалуйста введите одну из этих карт: (silver/gold/platinum)")
}

if (pointsPerLiter !== undefined) {
    var totalPoints = pointsPerLiter * liters
    console.log("за " + liters + " литров с картой " + cardType + " вы получите " + totalPoints + " баллов")
}   