
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const deactivateButton = modal.querySelector('.bg-red-600');
    const closeButton = modal.querySelector('.bg-white');
    const complete = document.getElementById("complete");

    // Show the modal and complete section when the page loads
    modal.style.opacity = 1;
    modal.style.transform = 'translateY(0)';
    modal.style.transition = 'opacity 300ms ease-out, transform 300ms ease-out';

    complete.style.opacity = 1;
    complete.style.transform = 'translateY(0)';
    complete.style.transition = 'opacity 300ms ease-out, transform 300ms ease-out';

    deactivateButton.addEventListener('click', () => {
        modal.style.opacity = 0;
        modal.style.transform = 'translateY(4rem)';

        complete.style.opacity = 0;
        complete.style.transform = 'translateY(4rem)';

        setTimeout(() => {
            modal.style.display = 'none';
            complete.style.display = 'none';
        }, 300); // Wait for the transition to complete before hiding the modal and complete section
    });
});
