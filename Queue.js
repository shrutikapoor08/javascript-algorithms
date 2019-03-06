//two operations - dequeue and enqueue

const MyCircularQueue = function(size) {
    this.queue = new Array(size);

}


MyCircularQueue.prototype.Front = function() {
    return this.queue[0] || -1;
}

MyCircularQueue.prototype.Rear = function() {
    return this.queue[this.queue.length - 1] || -1;
}

MyCircularQueue.prototype.enQueue = function(value) {
    
}
