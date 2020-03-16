/*let arrElem = [ "HTML", 11, "JavaScript", 2, "CSS", 23, 12];
console.log(arrElem);
arrElem.push(-300);
console.log(arrElem);
arrElem.unshift(1000);
console.log(arrElem);
arrElem.push("Last Array Element");
console.log(arrElem);
arrElem.splice(3, 1);
console.log(arrElem); */

// сделал каждому console.log чтобы было понятно пошагово что я делал 

let arrElem = [ "HTML", 11, "JavaScript", 2, "CSS", 23, 12];
arrElem.push(-300);
arrElem.unshift(1000);
arrElem.push("Last Array Element");
arrElem.splice(3, 1);
console.log(arrElem);
arrElem.filter(el => el !== "HTML", "JavaScript", "CSS");
console.log(arrElem);

//с filter , map не получилось не знаю как сделать :-(