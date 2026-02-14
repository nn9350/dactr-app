// Registers the service worker for offline support
export default function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then(
        registration => {
          // Registration successful
        },
        err => {
          // Registration failed
        }
      );
    });
  }
}
