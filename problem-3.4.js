/* ৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। 
ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। 
সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। 
ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।  */

const numbers = (num1, num2) => {
    const fisrt = num1 + 7;
    const second = num2 + 7;

    const final = fisrt + second;
    return final;
};

const result = numbers(10, 15);
console.log(result);