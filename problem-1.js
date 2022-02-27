/* ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। 
তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । 
একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। 
আর বাকি দুইটা তোমার ইচ্ছা মতো।  */

const student = {
    id: 11,
    name: 'kader',
    major: 'ICT',
    subjects: ['Math', 'english', 'physics'],
    friends: {
        name: 'kabul',
        major: 'physics',
    },
    exam: function () {
        console.log(this.major);
    }

}

student.exam()

const sub = Object.keys(student);
// console.log(sub)


for (const std in student) {
    console.log(std, student[std]);
}