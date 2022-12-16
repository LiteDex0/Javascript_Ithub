function car1F(year, model, mark, color, power, turbo, privod) {
    return {
        year: year,
        model: model,
        mark: mark,
        color: color,
        power: power,
        turbo: turbo,
        privod: privod,
    };
}
let car1 = car1F(2015, "Vesta", "Lada", "green", 130);
car1.year = 2015;
car1.model = "Granta";
car1.color = "blue"
console.log(car1);

let car2 = car1F(2016, "Vesta", "Lada", "red", 160);
car2.year = 2013;
car2.model = "niva";
car2.color = "black"
car2.privod = "polnij"
console.log(car2);

let car3 = car1F(2016, "Vesta", "Lada", "red", 160);
car3.mark = "Subaru";
car3.model = "Impreza";
car3.color = "black";
car3.power = 220;
car3.turbo = true;
car3.privod = "zadnij";
delete car3.year;
console.log(car3);