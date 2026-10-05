//your JS code here. If required.
document.getElementById("btn").addEventListener("click",function(e){
	e.preventDefault();
	const ageInput=document.getElementById("age").value.trim();
	const nameInput=document.getElementById("name").value.trim();

	if(!ageInput||!nameInput){
		alert("Please enter valid details.");
		return;
	}

const age=Number(ageInput);
const name=nameInput;

const votingpromise=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		if(age>=18){
			resolve(`welcome,${name}.You can vote`);
		}else {
			reject(`Oh sorry ${name}.You aren't old enough.`);
		}
	},4000);
});

votingpromise.then((message)=>{
	alert(message);
}).catch((error)=>{
	alert(error);
});
});