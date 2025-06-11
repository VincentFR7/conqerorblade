const ADMIN_PASSWORD = "monmotdepasse";  // change-le !

function login() {
    const input = document.getElementById('adminPass').value;
    if (input === ADMIN_PASSWORD) {
        document.getElementById('uploadSection').style.display = 'block';
        document.getElementById('loginMsg').textContent = "Connecté avec succès.";
    } else {
        document.getElementById('loginMsg').textContent = "Mot de passe incorrect.";
    }
}

window.onload = () => {
    fetch("uploads/videos/")
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(data, "text/html");
            const links = [...htmlDoc.querySelectorAll("a")].filter(a => a.href.endsWith(".mp4"));
            const videoList = document.getElementById("videoList");
            links.forEach(link => {
                const video = document.createElement("video");
                video.controls = true;
                video.src = "uploads/videos/" + link.textContent;
                videoList.appendChild(video);
            });
        });
}
