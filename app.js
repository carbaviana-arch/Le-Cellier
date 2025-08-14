if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(reg => console.log('Service worker registrado:', reg))
      .catch(err => console.error('Error al registrar service worker:', err));
  });
}
