let assignment10 = {
          "companyName" : "Tech Stars",
          "website" : "www.techstars.site",
          "employees" : [
            {
              "name" : "Sam",
              "department" : "Tech",
              "designation" : "Manager",
              "salary" : 40000,
              "raise eligible" : true
            },
            {
                "name" : "Mary",
                "department" : "Finance",
                "designation" : "Trainee",
                "salary" : 18500,
                "raise eligible" : true
            },
            {
                "name" : "Bill",
                "department" : "HR",
                "designation" : "Executive",
                "salary" : 21200,
                "raise eligible" : false
            }
        ]
};

console.log(assignment10);

const newEmployee = {
    "name" : "Anna",
    "department" : "Tech",
    "designation" : "Executive",
    "salary" : 25600,
    "raise eligible" : false
};

assignment10["employees"].push(newEmployee);

console.log(assignment10);

let total = 0;
for(let i = 0; i < 4; i++){
    total += assignment10["employees"][i].salary;
}

console.log(total);

for(let i = 0; i < 4; i++){
    if(assignment10.employees[i]["raise eligible"] == true){
        assignment10.employees[i]["salary"] += (assignment10.employees[i]["salary"])*0.1; 
        assignment10.employees[i]["raise eligible"] = false;
    }
}

console.log(assignment10);

for(let i = 0; i < 4; i++){
    let wfm = false;
    if(assignment10["employees"][i].name == 'Anna' || assignment10["employees"][i].name == 'Sam'){
        assignment10.employees[i]["Working from home"] = true; 
    }
    else{
        assignment10.employees[i]["Working from home"] = false;
    }
}

console.log(assignment10);


