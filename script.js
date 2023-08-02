document.addEventListener('DOMContentLoaded', function () {
    const modals = document.querySelectorAll('.modal');
    const modalLinks = document.querySelectorAll('.js-open-modal');
  
    // Function to close the modal
    // Fonction pour fermer la modale
    function closeModal() {
      modals.forEach((modal) => {
        modal.style.display = 'none';
      });
    }
  
    // Event listeners for modal links
    // Créer les liens vers les modales
    modalLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const modalId = link.getAttribute('href');
        const modal = document.querySelector(modalId);
        if (modal) {
          modal.style.display = 'flex';
        }
      });
    });
  
    // Event listener for closing the modal when clicking outside the modal content
    // Fermer la modale quand on clique en dehors
    modals.forEach((modal) => {
      modal.addEventListener('click', (event) => {
        if (event.target === modal) {
          closeModal();
        }
      });
    });
  });