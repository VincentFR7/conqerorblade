<?php
$target_dir = "uploads/videos/";
$target_file = $target_dir . basename($_FILES["videoFile"]["name"]);
$videoFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

if($videoFileType != "mp4") {
    echo "Seuls les fichiers MP4 sont autorisés.";
    exit;
}

if (move_uploaded_file($_FILES["videoFile"]["tmp_name"], $target_file)) {
    echo "La vidéo ". htmlspecialchars(basename($_FILES["videoFile"]["name"])). " a été uploadée.";
} else {
    echo "Erreur lors de l'upload.";
}
?>
