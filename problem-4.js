/* ৪. অনেকগুলা সংখ্যার একটা array হবে। 
তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। 
প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। 
পুরা কাজটা এক লাইনে হবে।  */

const numbers = [4, 6, 8, 10, 9, 11, 33, 44];
const result = numbers.map((number) => number / 7);
console.log(result);