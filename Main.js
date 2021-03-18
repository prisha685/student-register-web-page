 student= [];
 function submit() {
var name1= document.getElementById("n1").value;
var name2= document.getElementById("n2").value;
var name3= document.getElementById("n3").value;
var name4= document.getElementById("n4").value;
student.push(name1);
student.push(name2);
student.push(name3);
student.push(name4);
console.log (student);
document.getElementById("display-name").innerHTML=student;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";
 };
 function sorting() {
student.sort();
console.log(student);
document.getElementById("display-name").innerHTML=student;
 }


