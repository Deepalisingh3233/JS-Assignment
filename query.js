let name = prompt("Enter your Name-");
let query = prompt("Enter your query-");
let date = new Date;
console.log("Name - " + name);
console.log("Query - " + query);
console.log("Current Time -" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
if (date <= 9 && date >= 12) {
    let queryId = Math.floor(Math.random() * 1000000);
    console.log("Query ID -" + queryId);
}