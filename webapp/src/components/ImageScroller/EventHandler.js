class EventHandler {
    constructor(elementQuantity,index) {        
        this.maxIndex = elementQuantity;
        this.index = index;
        
        this.itemWidth = 140;
        this.maxLeft = 86;
        this.left = this.maxLeft;

        this.minLeft = (
            (elementQuantity - 1) *
            this.itemWidth * (-1)
        ) + this.maxLeft;
        
        this.minIndex = 0;
        this.direction = 0;        
        this.handling = 0;        
        this.initialTouch = 0;
        this.latestTouch = 0;
        this.currentTouch = false;
    }

    defineIndex(index) {        
        if ((index >= this.minIndex) && (index < this.maxIndex)) {
            this.index = index;
        }                
    }
    
    start(x) {
        this.handling = this.left;        
        this.initialTouch = x;
        this.currentTouch = true;
    }
        
    move(xTouch) {        
        if (this.currentTouch) {            
            this.swipe(xTouch);
            this.flinging(xTouch);
            this.calculateDirection(xTouch);
            this.latestTouch = xTouch;
        }
    }

    updateClick() {
        this.update(false)
    }

    updateTouch() {
        this.update(true)
    }

    update(touch) {
        this.initialTouch = 0;
        this.currentTouch = false;
        if (touch) this.fixIndex();
        this.left = (this.index * this.itemWidth * (-1)) + this.maxLeft;
    }

    swipe(xTouch) {        
        let deltaX = xTouch - this.initialTouch + this.handling;
        if (deltaX < this.minLeft) {
            deltaX = this.minLeft;
        } else if (deltaX > this.maxLeft) {
            deltaX = this.maxLeft;
        } 

        this.left = deltaX;
    }

    flinging(xTouch) {        
        let index = Math.round(
            Math.abs(
                (this.left - this.maxLeft) / this.itemWidth
            )
        );

        let difference = xTouch - this.latestTouch;
        let touchExtension = Math.abs(difference);
        
        let bonus = 0;
        if (touchExtension < this.itemWidth) {            
            if (difference < 0) {
                bonus = 1;
            } else {
                bonus = -1;
            }            
        }
        this.defineIndex( index + bonus );
    }

    calculateDirection(xTouch) {
        if (xTouch > this.latestTouch) {
            this.direction = 1;
        } else if (xTouch < this.latestTouch) {
            this.direction = -1;
        } else {
            this.direction = 0;
        }
    }

    fixIndex() {
        if (
            this.index == 1 && 
            this.direction == 1 && 
            this.left == this.maxLeft
        ) {
            this.index = 0;
        }

        if (
            this.index == (this.maxIndex - 2) &&
            this.direction == -1 &&
            Math.sign(this.left) == -1)
        {
            this.index = (this.maxIndex - 1);
        }
    }
}

export default EventHandler;