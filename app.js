document.write('<h1> Math Methods And Date Methods</h1><hr>');

//Question :- 1

var userinput0 = +prompt('Enter Any Positive Number');

document.write('<h1>Number :- ' + userinput0 + '</h1>');

document.write('<h1>Round Off Value :- ' + Math.round(userinput0) + '</h1>');

document.write('<h1>Ceil Value :- ' + Math.ceil(userinput0) + '</h1>');

document.write('<h1>Floor Value :- ' + Math.floor(userinput0) + '</h1><hr>');

//Question: :- 2

var userinput1 = +prompt('Enter Any Negative Number');

document.write('<h1>Number :- ' + userinput1 + '</h1>');

document.write('<h1>Round Off Value :- ' + Math.round(userinput1) + '</h1>');

document.write('<h1>Ceil Value :- ' + Math.ceil(userinput1) + '</h1>');

document.write('<h1>Floor Value :- ' + Math.floor(userinput1) + '</h1><hr>');

//Question :- 3

var userinput2 = +prompt('Enter Any Positive Floating Point / Decimal Number');

document.write('<h1>Number :- ' + userinput2 + '</h1>');

document.write('<h1>Round Off Value :- ' + Math.round(userinput2) + '</h1>');

document.write('<h1>Ceil Value :- ' + Math.ceil(userinput2) + '</h1>');

document.write('<h1>Floor Value :- ' + Math.floor(userinput2) + '</h1><hr>');

//Question :- 4

var userinput3 = +prompt('Enter Any Negative Floating Point / Decimal Number');

document.write('<h1>Number :- ' + userinput3 + '</h1>');

document.write('<h1>Round Off Value :- ' + Math.round(userinput3) + '</h1>');

document.write('<h1>Ceil Value :- ' + Math.ceil(userinput3) + '</h1>');

document.write('<h1>Floor Value :- ' + Math.floor(userinput3) + '</h1><hr>');

//Question :- 5

var userinput4 = prompt('Enter Any Negetive Number Again');

if(userinput4[0]=='-'){
    document.write('<h1>The Absolute Value Of ' + userinput4 + ' is ' +  userinput4.slice(1) + '</h1><hr>')
}
else{
    document.write('<h1>The Absolute Value Of ' + userinput4 + ' is ' +  userinput4 + '</h1><hr>')
}

//Question :- 6

var mathRandom = Math.ceil(Math.random() * 6);

document.write('<h1>Random Dice Value Is :- ' + mathRandom + '</h1><hr>');

//Question :- 7

var mathRandom1 = Math.ceil(Math.random() * 2);

if(mathRandom1 == 1){
    document.write('<h1>' + mathRandom1 + '</h1>');
    document.write('<h1>Random Coin Value Is :- Tails </h1><hr>');
}
else{
    document.write('<h1>' + mathRandom1 + '</h1>');
    document.write('<h1>Random Coin Value Is :- Heads </h1><hr>');
};

//Question :- 8

document.write('<h1>Random Number Between 1 and 100 :- ' + Math.ceil(Math.random() * 100) + '</h1><hr>');

//Question :- 9

var userinput5 = prompt('Enter Your Wieght In Kilogram');

document.write('<h1>The Weight of User Is ' + userinput5 + '</h1><hr>');

//Question :- 10

var mathRandom2 = Math.ceil(Math.random() * 10);

var userinput6 = +prompt('Enter a Number Between 1 To 10');

if(mathRandom2==userinput6){
    alert('Bingo! You Win')
}
else{
    alert('Try Again')
};

//Question :- 11

document.write('<h1>' + new Date() + '</h1><hr>');

//Question :- 12

var mounth = ['Janvary' , 'Febuary' , 'March', 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December'];

var now1 = new Date();

var themounth = now1.getMonth();

document.write('<h1>The Month Is :- ' + mounth[themounth] + '</h1><hr>');

//Question :- 13

var day1 = ['Sun' , 'Mon' , 'Tues' , 'Wed' , 'Thurs' , 'Fri' , 'Sat'];

var now = new Date();

var theDay = now.getDay();

document.write('<h1>Today Is :- ' + day1[theDay] + '</h1><hr>');

//Question :- 14

var day2 = ['Sun' , 'Mon' , 'Tues' , 'Wed' , 'Thurs' , 'Fri' , 'Sat'];

var now3 = new Date();

var theDay1 = now3.getDay();

if(day2[theDay1] == 'Sun' || day2[theDay1] == 'Sat'){
    document.write("<h1>It's Fun Day</h1><hr>")
}
else{
    document.write('<h1>Today Is :- ' + day1[theDay] + '</h1><hr>');
};

//Question :- 15

var now4 = new Date();

var theDay2 = now4.getDate();

if(theDay2 < 16){
    document.write("<h1>First Fifteen Day's Of The Month</h1><hr>")
}
else{
    document.write("<h1>Last Day's Of The Month</h1><hr>")
}

//Question :- 16

var now5 = new Date();

document.write('<h1>Current Date:- ' + now5 + '</h1>');

document.write('<h1>Elapsed milleseconds since Janvary 1,1970:- ' + now5.getTime() + '</h1>');

document.write('<h1>Elapsed minutes since Janvary 1,1970:- ' + now5.getTime() + '</h1><hr>');

//Question :- 17

var now6 = new Date();

var pm = now6.getHours();

if(pm <= 11){
    document.write("<h1>It's Am</h1><hr>")
}
else{
    document.write("<h1>It's Pm</h1><hr>")
}

//Question :- 18

var now7 = new Date(06/26/2021);

document.write('<h1>Later Date:- ' + now7 + '</h1><hr>')

//Question :- 24

var now8 = new Date()

document.write('<h1>K-Electric Bill</h1>');

document.write('<h1>Customer Name :- Anas Asif</h1>');

document.write('</h1>Month :- ' + mounth[now8.getMonth()] + '</h1>');

document.write('<h1>Number of Units:- ' + 420 + '</h1>');

document.write('<h1>Charges per unit:- ' + 14 + '</h1>');

document.write('Net Amount Payable(WithIn Due Date):- ' + 450*14 + '</h1>');

document.write('<h1>Late Payment Surcharge :- ' + 500 + '</h1>');

document.write('Gross Amount Payable(After Due Date):- ' + (450*14)+500 + '</h1><hr>');

//Question :- 23

var now9 = new Date()

var userinput7 = prompt('Enter Your age');

document.write('<h1>your age is ' + userinput7 + '</h1>');

document.write('<h1>Your Birth Year is ' + now9.getFullYear-userinput7 + '</h1><hr>');

