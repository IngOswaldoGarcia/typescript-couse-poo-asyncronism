var date = new Date();
date.getHours();
date.getMinutes();
var date2 = new Date(1993, 1, 12);
date2.getHours();
date2.getMinutes();
console.log(date);
console.log(date2);
var MyDate = /** @class */ (function () {
    function MyDate(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    return MyDate;
}());
var myDate = new MyDate(2021, 3, 13);
console.log("my date: ", myDate.year);
