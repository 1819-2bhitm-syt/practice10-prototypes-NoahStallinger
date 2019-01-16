function Square(length) {
    this.length = length;

    Square.prototype.getArea = function () {
        return this.length * this.length;
    }
    Square.prototype.getCircumference = function () {
        return (this.length + this.length)*2;
    }
}

module.exports = Square;