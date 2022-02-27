/* ৭. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। 
ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। 
তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে। */

const loadPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data))
}
loadPhotos();

const displayPhotos = photos => {
    console.log(photos)
    const photosAll = document.getElementById('photos');
    const photoslice = photos.slice(0, 150)
    photoslice.forEach(photo => {
        console.log(photo)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="photoDetails('${photo.id}')" class="card h-100">
            <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${photo.title}</h5>
            </div>
        </div>
        `;
        photosAll.appendChild(div);
    })
}

const photoDetails = id => {
    console.log(id)
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhotoDetail(data))
}

const displayPhotoDetail = photoId => {
    console.log(photoId)
    const photoDetail = document.getElementById('photo-details');
    photoDetail.innerHTML = `
    <div  class="card h-100">
        <img src="${photoId.url}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${photoId.title}</h5>
            <a href="${photoId.thumbnailUrl}" class="btn btn-primary">More</a>
        </div>
    </div>
    `;
}