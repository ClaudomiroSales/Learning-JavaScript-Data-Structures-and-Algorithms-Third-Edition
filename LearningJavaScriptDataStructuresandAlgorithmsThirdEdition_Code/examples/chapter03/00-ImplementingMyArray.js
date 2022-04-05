
class myArray{
    constructor(count = 0){
        if( count < 0 )
          count = 0;
        this.count = count;
        this.items = new Array( 2 * this.count );				
        for( let i = 0; i < this.count; i++ )
            this.items[ i ] = 0;
    }  
    printArray(){
        for( let i = 0; i < this.count; i++ )
            console.log(this.items[i]);
    }
    insert( item ){
        // If the array is full, resize it	
        if (this.items.length === this.count){
            // Create a new array (twice the size)
            let newItems = new Array( this.count * 2 );
            // Copy all the existing items
            for( let i = 0; i < this.count; i++ )
                newItems[ i ] = this.items[ i ];
            // Set items to this new array
            this.items = newItems;
        }
        // Add the new item at the end
        this.items[this.count++] = item;
    }
    verifyIndex_( index ){
        // Validate the index
        if( index < 0 || index >= this.count )  
            throw new Error("Invalid index");
    }
    put( item, index ){
        this.verifyIndex_( index );
        this.items[index] = item;
    }
    removeAt( index ) {
        // Validate the index
        this.verifyIndex_( index );
        // Shift the items to the left to fill the hole
        // [ 10, 20, 30, 40 ]
        // index: 1
        // 1 <- 2
        // 2 <- 3
        // [ 10, 30, 40, 40 ]
        // count--
        // [ 10, 30, 40 ]
        for( let i = index; i < this.count; i++ )
            this.items[ i ] = this.items[ i + 1 ];

        this.count--;
    }

    printArray(){
        for( let i = 0; i < this.count; i++ )
            console.log(this.items[i]);
    }

    indexOf( item ){
        // If we find it, return index
        // Otherwise, return -1
        for( let i = 0; i < this.count; i++ )
            if( item == this.items[ i ] )
                return i;
        return null;
    }

    printArray(){
        for( let i = 0; i < this.count; i++ )
            console.log(this.items[i]);
    }
}


  
  const contador = new myArray( 2 );
  console.log("Init");
  contador.printArray();
  console.log("Insert: 10, 20 and 30");
  contador.insert(10);
  contador.insert(20);
  contador.insert(30);  
  contador.printArray();
  console.log("put 10 in index 0");
  contador.put(10, 0);
  contador.printArray();
  console.log("remove index 2");
  contador.removeAt( 2 );
  contador.printArray();
  console.log("remove index 3");
  contador.removeAt( 3 );
  contador.printArray();
  console.log("indexOf 20 -> array 10, 0, 20");
  index = contador.indexOf( 20 );
  if( index != null )
    console.log( "Index ", index );
  else
    console.log( "Item não encontrado");
  