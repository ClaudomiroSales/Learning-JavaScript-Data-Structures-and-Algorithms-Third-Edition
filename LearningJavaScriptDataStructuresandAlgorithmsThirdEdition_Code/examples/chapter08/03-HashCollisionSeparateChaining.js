const { HashTableSeparateChaining } = PacktDataStructuresAlgorithms;

/*
const hashTable = new HashTableSeparateChaining();

hashTable.put('Ygritte', 'ygritte@email.com');
hashTable.put('Jonathan', 'jonathan@email.com');
hashTable.put('Jamie', 'jamie@email.com');

hashTable.put('Jack', 'jack@email.com');
hashTable.put('Jasmine', 'jasmine@email.com');
hashTable.put('Jake', 'jake@email.com');
hashTable.put('Nathan', 'nathan@email.com');
hashTable.put('Athelstan', 'athelstan@email.com');
hashTable.put('Sue', 'sue@email.com');
hashTable.put('Aethelwulf', 'aethelwulf@email.com');
hashTable.put('Sargeras', 'sargeras@email.com');


console.log('**** Printing Hash **** ');

console.log(hashTable.toString());
*/

console.log('**** Testando código Leandro **** ');
const hashtableCities_Skylines  = new HashTableSeparateChaining();
hashtableCities_Skylines.put("Hospital Hanguk", "102 pacientes")
hashtableCities_Skylines.put("Hospital Chicago", "72 pacientes");
hashtableCities_Skylines.put("Hospital Wang", "38 pacientes");
hashtableCities_Skylines.put("Hospital Ilsan ", "15 pacientes");
/*
    x.put("Hospital Gyeongju", "22 pacientes")
    x.put("Hospital Nagano", "28 pacientes")
    x.put("Hospital Myshuno", "28 pacientes")
    x.put("Hospital Nanjun", "55 pacientes")
*/
console.log(hashtableCities_Skylines.toString());

//get
console.log('**** Get **** ');
console.log(hashtableCities_Skylines.get("Hospital Hanguk"));

//remove
hashtableCities_Skylines.remove("Hospital Wang");
console.log(hashtableCities_Skylines.toString());

console.log('**** Testando código Leandro **** ');

// {4 => [#Ygritte: ygritte@email.com]},{5 => [#Jonathan: jonathan@email.com],[#Jamie: jamie@email.com],[#Sue: sue@email.com],[#Aethelwulf: aethelwulf@email.com]},{7 => [#Jack: jack@email.com],[#Athelstan: athelstan@email.com]},{8 => [#Jasmine: jasmine@email.com]},{9 => [#Jake: jake@email.com]},{10 => [#Nathan: nathan@email.com],[#Sargeras: sargeras@email.com]}
/*
console.log('**** Get **** ');

console.log(hashTable.get('Jamie')); // jamie@email.com
console.log(hashTable.get('Sue')); // sue@email.com
console.log(hashTable.get('Jonathan')); // jonathan@email.com
console.log(hashTable.get('Loiane')); // undefined

console.log('**** Remove **** ');

console.log(hashTable.remove('Ygritte')); // true
console.log(hashTable.get('Ygritte')); // undefined
console.log(hashTable.toString());
// {5 => [#Jonathan: jonathan@email.com],[#Jamie: jamie@email.com],[#Sue: sue@email.com],[#Aethelwulf: aethelwulf@email.com]},{7 => [#Jack: jack@email.com],[#Athelstan: athelstan@email.com]},{8 => [#Jasmine: jasmine@email.com]},{9 => [#Jake: jake@email.com]},{10 => [#Nathan: nathan@email.com],[#Sargeras: sargeras@email.com]}

console.log(hashTable.remove('Sue')); // true
console.log(hashTable.toString());
// {5 => [#Jonathan: jonathan@email.com],[#Jamie: jamie@email.com],[#Aethelwulf: aethelwulf@email.com]},{7 => [#Jack: jack@email.com],[#Athelstan: athelstan@email.com]},{8 => [#Jasmine: jasmine@email.com]},{9 => [#Jake: jake@email.com]},{10 => [#Nathan: nathan@email.com],[#Sargeras: sargeras@email.com]}

console.log(hashTable.remove('Jamie')); // true
console.log(hashTable.toString());
// {5 => [#Jonathan: jonathan@email.com],[#Aethelwulf: aethelwulf@email.com]},{7 => [#Jack: jack@email.com],[#Athelstan: athelstan@email.com]},{8 => [#Jasmine: jasmine@email.com]},{9 => [#Jake: jake@email.com]},{10 => [#Nathan: nathan@email.com],[#Sargeras: sargeras@email.com]}

console.log(hashTable.remove('Aethelwulf')); // true
console.log(hashTable.toString());
// {5 => [#Jonathan: jonathan@email.com]},{7 => [#Jack: jack@email.com],[#Athelstan: athelstan@email.com]},{8 => [#Jasmine: jasmine@email.com]},{9 => [#Jake: jake@email.com]},{10 => [#Nathan: nathan@email.com],[#Sargeras: sargeras@email.com]}
*/