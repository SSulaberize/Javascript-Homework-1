// სავარჯიშო 1
let user = {
    firstname: 'giorgi',
    lastname: 'smith',
    age: 25,
    studentstatus: 'active',
};
console.log(user.studentstatus);



// სავარჯიშო 2
let items = ['house', 'car', 15, 'melon', 'apple', 2, 'tree'];

for (let a of items){
    console.log(a); 
}

let a=0;
while (a<items.length){
    console.log(items[a]);
    a++;
}



// სავარჯიშო 3
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for (let a=0; a<numbers.length; a++){
    if (numbers[a]>5){
        console.log(numbers[a]);
    }
}



// სავარჯიშო 4
let user = {
    name: 'giorgi',
    age: 20,
    studentstatus: 'active',
};

if (user.age < 18 && user.studentstatus == 'active'){
    console.log('Hello');
}
else if (user.name == 'levani'){
    console.log('Hello Levani');
}
else if (user.studentstatus == 'active' || user.age < 25){
    console.log('Hello World');
}
else {
    console.log('Error');
}




// სავარჯიშო 5
let array = ['watermelon', 'pear', 10, 45, 50, 'apple', 'ananas'];
for(let a of array){
    if (typeof a == "string"){
        console.log(a);
    }
}



//სავარჯიშო 6
let array = [[2, -3, 5, 10], [25, -24, -11, 100], [-6, -7, 10]];

for (let a of array[0]){
    if (a > 0){
        console.log(a);
    }
}
for (let a1 of array [1]){
    if ( a1 > 0){
        console.log(a1);
    }
}
for (let a2 of array [2]){
    if (a2 > 0){
        console.log(a2);
    }
}



// სავარჯიშო 7
let array = [ 2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10 ];

for (let a of array){
    if (a %2 == 0){
        console.log(a);
    }
}

for (let a of array){
    if (a %2 == 1){
        console.log(a);
    }
}



// სავარჯიშო 8
let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true},
];
for (a = 0; a < users.length; a++){
    if (users[a].status == true){
        console.log(users[a]);
    }
}
