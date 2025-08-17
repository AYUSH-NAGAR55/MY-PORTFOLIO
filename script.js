  const openPhoto = document.getElementById('open-photo');
  const photoModal = document.getElementById('photo-modal');
  const closeBtn = document.querySelector('.close-btn');

  // ✅ Auto-open modal when page loads


  // 👆 Optional: Still allow manual click to reopen
  openPhoto.addEventListener('click', () => {
    photoModal.style.display = 'flex';
  });

  // ❌ Close modal when X is clicked
  closeBtn.addEventListener('click', () => {
    photoModal.style.display = 'none';
  });

  // ❌ Close modal when clicking outside the image
  window.addEventListener('click', (e) => {
    if (e.target === photoModal) {
      photoModal.style.display = 'none';
    }
  });