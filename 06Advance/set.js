//Set function only allows unique values not duplicates

let marvel = new Set(['Batman','Flash','Batman']);
marvel.add('Superman');

marvel.add('Superman');



console.log(marvel);

for(m of marvel){
    console.log(m);
}