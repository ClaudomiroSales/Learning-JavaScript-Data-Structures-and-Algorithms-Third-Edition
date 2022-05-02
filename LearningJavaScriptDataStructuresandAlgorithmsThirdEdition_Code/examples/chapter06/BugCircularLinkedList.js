const { CircularLinkedList } = PacktDataStructuresAlgorithms;

const list = new CircularLinkedList();

console.log('push element 15');
list.push(15);
console.log('list.toString() => ', list.toString());

console.log('push element 16');
list.push(16);
console.log('list.toString() => ', list.toString());

console.log('push element 17');
list.push(17);
console.log('list.toString() => ', list.toString());

console.log(list.getElementAt( list.size( ) - 1 ) );