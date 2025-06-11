document.getElementById('videoUpload').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const video = document.createElement('video');
        video.controls = true;
        video.src = URL.createObjectURL(file);
        document.getElementById('videoPreview').innerHTML = '';
        document.getElementById('videoPreview').appendChild(video);
    }
});

document.getElementById('imageUpload').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        document.getElementById('imageGallery').innerHTML = '';
        document.getElementById('imageGallery').appendChild(img);
    }
});
