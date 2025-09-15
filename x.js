async function loadContent() {
        try {
            const response = await fetch('content.html'); // Fetch the external HTML file
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const htmlContent = await response.text(); // Get the HTML content as text

            const container = document.getElementById('content-container');
            if (container) {
                container.innerHTML = htmlContent; // Inject the HTML into the container
            } else {
                console.error('Content container not found.');
            }
        } catch (error) {
            console.error('Error loading HTML snippet:', error);
        }
    }

loadContent();
