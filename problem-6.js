/* ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 
array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে। */

const student = {
    id: 11,
    money: 600,
    major: 'physics',
    sub: ['math', 'bangla', 'ict']
}

const money = student.money;
console.log(money);

// const balance = student.sub;
// console.log(balance[1])

const x = [2, 3, 9, 4, 10];
const [, balance, , ,] = x;
console.log(balance);