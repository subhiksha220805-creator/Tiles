const rooms = {
    livingroom: { title: 'LIVING ROOM', image: 'images/livingroom1.png' },
    bedroom: { title: 'BEDROOM', image: 'images/bedroom1.png' },
    bathroom: { title: 'BATHROOM', image: 'images/bathroom1.png' }
};

const room = rooms[new URLSearchParams(location.search).get('room')];
const title = document.getElementById('roomTitle');
const message = document.getElementById('viewerMessage');

if (location.protocol === 'file:') {
    message.textContent = 'This page is running as file://, so Pannellum cannot access the 360° image. Close this tab and double-click start-viewer.bat in the project folder. The page must open at http://127.0.0.1:8765/; do not open viewer.html directly.';
    message.classList.remove('is-hidden');
} else if (!room) {
    title.textContent = 'Room not found';
    message.textContent = 'Choose a room from the Brescia Viva room selection page.';
    message.classList.remove('is-hidden');
} else {
    title.textContent = room.title;
    pannellum.viewer('panorama', {
        type: 'equirectangular',
        panorama: room.image,
        autoLoad: true,
        compass: false,
        showZoomCtrl: true,
        showFullscreenCtrl: true,
        mouseZoom: true,
        draggable: true,
        keyboardZoom: true,
        minFov: 30,
        maxFov: 120,
        hfov: 100,
        pitch: 0,
        yaw: 0,
        onError: (error) => {
            message.textContent = `The 360° image could not load: ${error}. If you opened this page from File Explorer, double-click start-viewer.bat and use the browser tab it opens.`;
            message.classList.remove('is-hidden');
        }
    });
}
