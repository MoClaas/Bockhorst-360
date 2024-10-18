const panoramaImage = new PANOLENS.ImagePanorama("../Bilder/Versmold.jpg");
const imageContainer = document.querySelector(".image-container");

const infospot = new PANOLENS.Infospot(500, PANOLENS.DataImage.Info);
infospot.position.set(500, 500, -9000);
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
    // zoom: {
    //     inverted: true
    // }
});

viewer.add(panoramaImage);

// viewer.addEventListener('wheel', function(event) {
//     event.preventDefault(); // Standard-Scrolling verhindern
    
//     // Invertiere die Scrollrichtung
//     if (event.deltaY < 0) {
//         viewer.zoomOut(); // Scrollen nach oben - hineinzoomen
//     } else {
//         viewer.zoomIn(); // Scrollen nach unten - herauszoomen
//     }
// });