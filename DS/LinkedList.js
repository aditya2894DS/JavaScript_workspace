
// Basic operations on linked list
// 1. Transversing the list 
// 2. Inserting item in the list 
// 3. Deleting item in the list


class LinkedList{

    constructor(data){
        this.#setData(data);
        this.next = null;
    };

    // set Data
    #setData(data){
        this.data = data
    }

    // get data
    getData(){
        return this.data;
    }

    // set next node
    setNext(LinkedList next){
        this.next = next
    }

}