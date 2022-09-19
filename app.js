// ********************1. Write a ts program to print all natural numbers from 1 to n. - using while loop********\
// var i:number=1;
// var n:number=20;
// while(i<=n)
// {
//     console.log(i)
//     i++
// }
// ********************2. Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop********\
// var i: number = 1;
// var n: number = 20;
// while (n>=i) {
//     console.log(n)
//     n--
// }
// // ********************3. Write a ts program to print all alphabets from a to z. - using while loop - using while loop********\
// var character:any='a'
// while(character<='z')
// {
//     console.log(character);
//     character++
// }
// ********************4. Write a ts program to print all even numbers between 1 to 100. - using while loop********\
// var i:number=1
// while(i<=100)
// {
//     if(i%2==0)
//     {
//         console.log(i);
//     }
//     i++
// }
// ********************5. Write a ts program to print all odd number between 1 to 100.********\
// var i:number=1
// while(i<=100)
// {
//     if(i%2!=0)
//     {
//         console.log(i);
//     }
//     i++
// }
// ********************6. Write a ts program to find sum of all natural numbers between 1 to n.********\
// var i:number=1
// var n:number=100
// var sum:number=0;
// while(i<=n)
// {
//     sum+=i
//     i++
// }
// console.log(sum);
// ********************7. Write a ts program to find sum of all even numbers between 1 to n..********\
// var i:number=1
// var n:number=100
// var sum:number=0
// while(i<=n)
// {
//     if(i%2==0)
//     {
//         sum+=i
//     }
//     i++
// }
// console.log(sum);
// ********************8. Write a ts program to find sum of all odd numbers between 1 to n.********\
// var i:number=1
// var n:number=100
// var sum:number=0
// while(i<=n)
// {
//     if(i%2!=0)
//     {
//         sum+=i
//     }
//     i++
// }
// console.log(sum);
// ********************9. Write a ts program to print multiplication table of any number.********\
// var n:number=10;
// for(var i:number=1;i<=10;i++)
// {
//     console.log(`${n} X ${i} = ${n*i}`);
// }
// ********************10. Write a ts program to count number of digits in a number.********\
// var numbers:string="12378789878"
// console.log(numbers.length);
// ********************11. Write a ts program to find first and last digit of a number.********\
// var value:number=123234;
// var lastNumber:number,firstNumber:number;
// lastNumber=value%10;
// var n:number=value
// while(n>=10)
// {
//         n=n/10
// }
// firstNumber=n;
// console.log(Math.floor(firstNumber),lastNumber);
// ********************12. Write a ts program to find sum of first and last digit of a number.********\
// var value:number=343;
// var lastNumber:number,firstNumber:number;
// lastNumber=value%10;
// var n:number=value
// while(n>=10)
// {
//         n=n/10
// }
// firstNumber=n;
// var sum=Math.floor(firstNumber)+lastNumber
// console.log("Number=",value);
// console.log("Sum of first and last digit is",sum);
// ********************14. Write a ts program to calculate sum of digits of a number.********\
var value = 343;
var lastNumber, firstNumber;
lastNumber = value % 10;
var n = value;
var sum = 0;
while (n >= 10) {
    n = n / 10;
    sum = sum + n;
}
console.log(sum);
// ********************45. Write a ts program to convert Decimal to Binary number system..********\
// var decimalNumber:number=79;
// var base1:number=8;
// var base:number;
// // console.log(Math.floor(decimalNumber/2),decimalNumber%2);
// console.log(decimalNumber);
// for(var i=0;i<=decimalNumber;i++)
// {
//         decimalNumber=decimalNumber/base1
//         base=decimalNumber%base1
//         console.log((decimalNumber),(base));
// }
