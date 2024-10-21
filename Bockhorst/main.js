const panoramaImage = new PANOLENS.ImagePanorama("../Bilder/Bockhorst.jpg");
const imageContainer = document.querySelector(".image-container");

const infospot = new PANOLENS.Infospot(500, '../Bilder/versmoldWappen.png');
infospot.position.set(6000, 500, 3500);
infospot.addHoverText("Versmold", 50);
/* infospot.image = '../Bilder/andererOrt.png';
 */
const infospot2 = new PANOLENS.Infospot(500, PANOLENS.DataImage.Info);
infospot2.position.set(0, -5000, 0);
infospot2.addHoverText("Zuhause", 50);

infospot.addEventListener('click', function() {
    window.open('../Versmold/index.html', '_self');
})
infospot2.addEventListener('click', function() {
    window.open('../Zuhause/index.html', '_self');
})

panoramaImage.add(infospot);
panoramaImage.add(infospot2);

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



/* // Funktion, die prüft, ob der Infospot in Sichtweite ist
function checkInfospotVisibility() {
    // Berechne den Winkel zwischen der Kamera und dem Infospot
    const direction = viewer.camera.getWorldDirection(new THREE.Vector3());
    const infospotDirection = new THREE.Vector3().subVectors(infospot.position, viewer.camera.position).normalize();
  
    // Winkel zwischen der Blickrichtung der Kamera und der Position des Infospots
    const angle = direction.angleTo(infospotDirection);
  
    // Falls der Winkel klein genug ist (Infospot ist direkt im Blickfeld), zeige den Text
    if (angle < Math.PI / 2) { // Etwa 30 Grad
      infospot.onHover(true);  // Hover aktivieren
    } else {
      infospot.onHover(false); // Hover deaktivieren
    }
  } */