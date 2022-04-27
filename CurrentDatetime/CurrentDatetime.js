class CurrentTime {
    constructor() {
        this.now = this.currentTime();
    }
    currentTime() {
        var date = new Date();
        var time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        return time;
    }
}


if (typeof require !== 'undefined' && require.main === module) {
    var currentTime = new CurrentTime();
    console.log(currentTime.now);
}

