/*
Requirements
----------
For each problem below, write a loop that prints the given output. Some of the problems will require you to write an if statement in the loop. Assume a global array called students is defined as follows:
*/



var students = [
    {
        name: 'Liz',
        age: 25,
        city: 'Boulder'
},
    {
        name: 'Meghan',
        age: 27,
        city: 'Denver'
},
    {
        name: 'Trent',
        age: 32,
        city: 'Boulder'
},
    {
        name: 'Chelsea',
        age: 24,
        city: 'Boulder'
},
    {
        name: 'Amir',
        age: 18,
        city: 'Denver'
}
];

/*
For example:
---------

<em>Problem:</em>

<pre>
Liz
Meghan
Trent
Chelsea
Amir
</pre>

<em>Solution:</em>

<pre>
for(var i=0; i &lt; students.length; i++) {
 console.log(students[i].name);
}
</pre>

Problems:
----------
- 25 27 32 24 18 // ages
- Liz, Boulder Meghan, Denver Trent, Boulder Chelsea, Boulder Amir, Denver
- Liz is from Boulder Trent is from Boulder Chelsea is from Boulder
- Meghan is older than 25 Trent is older than 25
*/

function getAges(studentsArray) {
    var results = [];
    var listValues = '';
    var maxAge = null;
    var minAge = null;

    studentsArray.forEach(function (element) {
        results.push(element.age);
    });

    results.sort();
    maxAge = Math.max.apply(Math, results);
    console.log('The highest age in the group is: ' + maxAge + '!');
    minAge = Math.min.apply(Math, results);
    console.log('The lowest age in the group is: ' + minAge + '!');

    listValues = results.join(' ');

    console.log(listValues);
}

function getStudentNameAndCity(studentsArray) {
    var outputString = '';

    for (var i = 0; i < studentsArray.length; i++) {
        outputString += studentsArray[i].name + ' ' + studentsArray[i].city + ', ';
    }

    console.log(outputString);
    return;
}


function whoseFromBoulder(studentsArray) {
    var thoseFromBoulder = [];

    studentsArray.filter(function (element) {
        if (element.city === 'Boulder') {
            thoseFromBoulder.push(element.name + ' is from Boulder');
        }
    });

    console.log(thoseFromBoulder.join(' '));
    return;
}

function whoIsOlderThan25(studentsArray) {
    var olderThan25 = [];

    for (var i = 0; i < studentsArray.length; i++) {
        if (studentsArray[i].age > 25) {
            olderThan25.push(studentsArray[i].name + ' is older than 25 ');
        }
    }

    console.log(olderThan25.join(' '));
    return;
}

getAges(students);
getStudentNameAndCity(students);
whoseFromBoulder(students);
whoIsOlderThan25(students);
