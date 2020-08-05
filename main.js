function loadjson(file,callback)
{
	var xhr = new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	//true-->file exist
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status=="200")//===-->same dataype and value
			callback(xhr.responseText);
	}
	xhr.send(null);
};
loadjson("data.json",function(text){
	var data = JSON.parse(text); //serialized data
	//document.writeln(data,text);
	basic(data.details);
	careerinfo(data.careerobjective);
	education(data.educationqualification);
	skills(data.technicalities);
})


/*function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}
//then-->response
var newfile = loadjson("data.json");
newfile.then(data=>{
	console.log(data)
	//basic().....
})
*/
var child1=document.querySelector(".child1");//to dispaly data in req pos

function basic(det)
{
	

	var ima=document.createElement("img");
	//ima.src = "third.jpg";  (or)
	ima.src=det.image;
	child1.appendChild(ima);

	var name=document.createElement("h4");
	name.textContent = det.name;
	child1.appendChild(name);

	//child1.appendChild(document.createElement("br"));

	var mail=document.createElement("a");
	mail.href="mailto:sravanisai484@gmail.com";
	mail.textContent=det.email;
	child1.appendChild(mail);

	var num = document.createElement("h4");
	num.textContent=det.number;
	child1.appendChild(num);

	//var add=document.createElement("h2");
	//add.textContent="Address";
	//child1.appendChild(add);

	//child1.appendChild(document.createElement("hr"));

	var add1=document.createElement("p");
	add1.textContent=det.address;
	child1.appendChild(add1);
}	

var child2 = document.querySelector(".child2");
function careerinfo(info1){
	var heading1 = document.createElement("h2");
	heading1.textContent="CareerObjective";
	child2.appendChild(heading1);


	var heading2 = document.createElement("p");
	heading2.textContent=info1.info;
	child2.appendChild(heading2);

	child2.appendChild(document.createElement("hr"));

}

function education(edu){
	var heading3 = document.createElement("h2");
	heading3.textContent="Education qualification";
	child2.appendChild(heading3);

	

	var table1 = document.createElement("table");
	table1.border = "1";
	child2.appendChild(table1);

	tabledata="";
	for(i=0;i<edu.length;i++){
		tabledata+="<tr><td>"+edu[i].institution+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passout+"</td><td>"+edu[i].percentage+"</tr>";

	}
	table1.innerHTML=tabledata;
	child2.appendChild(document.createElement("hr"));

}

function skills(skillinfo){
	var hd = document.createElement("h2");
	hd.textContent="Technical skills";
	child2.appendChild(hd);

	

	for(i=0;i<skillinfo.length;i++)
	{
		var title=document.createElement("h4");
		title.textContent=skillinfo[i].title;
		child2.appendChild(title);

		var skillul = document.createElement("ul");
		var skillli = document.createElement("li");
		skillli.textContent=skillinfo[i].info;
		skillul.appendChild(skillli);
		child2.appendChild(skillul);
	}

}