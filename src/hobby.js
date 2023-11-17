

const imageSources = [
    '../image/hobbyImgCollection/image1.jpg',
    '../image/hobbyImgCollection/image2.jpg',
    '../image/hobbyImgCollection/image3.jpg',
    '../image/hobbyImgCollection/image4.jpg',
    '../image/hobbyImgCollection/image5.jpg',
    '../image/hobbyImgCollection/image6.jpg',
    '../image/hobbyImgCollection/image7.jpg',
    '../image/hobbyImgCollection/image8.jpg',
    '../image/hobbyImgCollection/image9.jpg',
    '../image/hobbyImgCollection/image10.jpg',
    '../image/hobbyImgCollection/image11.jpg',
    '../image/hobbyImgCollection/image12.jpg'
];



function isOverlapping(newImg, existingImgs) {
    for (let i = 0; i < existingImgs.length; i++) {
        const eImg = existingImgs[i];
        if (!(newImg.left >= eImg.right ||
            newImg.right <= eImg.left ||
            newImg.top >= eImg.bottom ||
            newImg.bottom <= eImg.top)) {
            return true; // There is an overlap
        }
    }
    return false; // No overlap
}


document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.getElementById('imageContainer');
    let existingImgs = []; // Array to keep track of existing images

    setInterval(function() {
        imageContainer.innerHTML = '';
        existingImgs = []; // Clear the array for new positions

        for (let i = 0; i < imageSources.length; i++) {
            let maxAttempts = 10;
            let placed = false;



            while (!placed && maxAttempts > 0) {
                maxAttempts--;
                let width = 165 + Math.random() * 100; // Random width
                let height = 150 + Math.random() * 120; // Random height

                let top = Math.random() * (imageContainer.clientHeight - height);
                let left = Math.random() * (imageContainer.clientWidth - width);

                let newImg = {
                    top: top,
                    left: left,
                    right: left + width,
                    bottom: top + height
                };

                if (!isOverlapping(newImg, existingImgs)) {
                    const img = document.createElement('img');
                    img.src = imageSources[i];
                    img.className = 'dynamic-image';
                    img.style.top = top + 'px';
                    img.style.left = left + 'px';
                    img.style.width = width + 'px';
                    img.style.height = height + 'px';

                    imageContainer.appendChild(img);
                    existingImgs.push(newImg);
                    placed = true;
                }
            }
        }
    }, 2000);
});
