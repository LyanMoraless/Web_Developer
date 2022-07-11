function aplDescont(price, desc) {
    if(desc > price) return 0;
    else return price - desc;
}

module.exports = { aplDescont };