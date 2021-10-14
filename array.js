let subject=["Hindi","English","Maths","Science","Social Study"];
for(let i=0;i<=subject.length-1;i++){
	console.log(subject[i]);
}
let new_sub = prompt("Enter new Subject name for adding- ");
subject.push(new_sub);
console.log("After updation-");
for(i=0;i<=subject.length-1;i++){
	console.log(subject[i]);
}
