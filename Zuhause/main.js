const panoramaImage = new PANOLENS.ImagePanorama("../Bilder/Zuhause.jpg");
const imageContainer = document.querySelector(".image-container");

const infospot = new PANOLENS.Infospot(500, PANOLENS.DataImage.Info);
infospot.position.set(0, 5000, 0);
infospot.addHoverText("Bockhorst", 50);

infospot.addEventListener('click', function() {
    window.open('../Bockhorst/index.html', '_self');
})

panoramaImage.add(infospot);

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: false,
    autoRotateSpeed: 0.2,
    controlBar: false,
    zoom: {inverted: false},
});

viewer.add(panoramaImage);

const menuIcon = document.querySelector('.menu-icon');
const menuContainer = document.querySelector('.menu-container');

menuIcon.addEventListener('click', () => {
    menuContainer.classList.toggle('open'); // "open"-Klasse wird hinzugefügt oder entfernt
});

panoramaImage.addEventListener('click', () => {
    menuContainer.classList.remove('open'); // "open"-Klasse wird entfernt
});