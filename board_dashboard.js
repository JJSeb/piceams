// Dummy data for events
const events = [
    { id: 1, name: "General Assembly Meeting" },
    { id: 2, name: "Leadership Training Seminar" },
    { id: 3, name: "Team Building Workshop" }
];

// Function to display the event list
function displayEventList() {
    const eventList = document.querySelector('.event-list');
    eventList.innerHTML = ''; // Clear existing list

    events.forEach(event => {
        const listItem = document.createElement('li');
        listItem.textContent = event.name;
        listItem.addEventListener('click', () => {
            showQRScanner(event.id);
        });
        eventList.appendChild(listItem);
    });
}


// Function to show the QR scanner section
async function showQRScanner(eventId) {
    document.querySelector('.attendance-section').style.display = 'none';
    document.querySelector('.qr-scanner-section').style.display = 'block';

    const qrReaderResults = document.getElementById('qr-reader-results');

    function onScanSuccess(decodedText, decodedResult) {
        console.log(`Scan result: ${decodedText}`, decodedResult);
        qrReaderResults.textContent = `Scanned: ${decodedText}`;
    }

    function onScanFailure(error) {
        console.warn(`QR error = ${error}`);
    }

    try {
        const cameras = await Html5Qrcode.getCameras();

        if (cameras && cameras.length > 0) {
            const cameraId = cameras[0].id;

            const html5QrcodeScanner = new Html5QrcodeScanner(
                "qr-reader",
                {
                    fps: 10,
                    qrbox: { width: 250, height: 250 },
                    rememberLastUsedCamera: true
                },
                /* verbose= */ false
            );

            html5QrcodeScanner.render(onScanSuccess, onScanFailure);
        } else {
            console.error("No cameras found.");
            qrReaderResults.textContent = 'Error: No cameras found.';
        }
    } catch (err) {
        console.error("Error accessing cameras or starting scanner:", err);
        qrReaderResults.textContent = `Error: ${err}`;
    }
}


// Handle time in/time out toggle
const timeToggle = document.getElementById('timeToggle');
const toggleLabel = document.getElementById('toggleLabel');

timeToggle.addEventListener('change', () => {
    toggleLabel.textContent = timeToggle.checked ? 'Time Out' : 'Time In';
});

document.addEventListener('DOMContentLoaded', displayEventList);
