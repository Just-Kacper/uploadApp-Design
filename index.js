function startCountingUp(targetValue, duration, elementId) {
    const counterElement = document.getElementById(elementId);

    const startValue = 0;
    const increment = targetValue / duration;
    let currentValue = startValue;

    function updateCounter() {
      currentValue += increment;
      counterElement.textContent = Math.round(currentValue);

      if (currentValue < targetValue) {
        requestAnimationFrame(updateCounter);
      }
    }

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        updateCounter();
        observer.disconnect();
      }
    });

    observer.observe(counterElement);
  }

  // Usage example
  startCountingUp(15980, 100, 'registeredUsersValue');
  startCountingUp(28575, 100, 'uploadedFilesValue');