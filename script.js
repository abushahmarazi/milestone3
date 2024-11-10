// Function to generate resume preview and open modal
function generateResume() {
    // Get values from form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const linkedin = document.getElementById('linkedin').value;
    const summary = document.getElementById('summary').value;
    const education = document.getElementById('education').value;
    const work = document.getElementById('work').value;
    const skills = document.getElementById('skills').value;

    // Populate resume preview section in modal
    document.getElementById('preview-name').textContent = name;
    document.getElementById('preview-email').textContent = email;
    document.getElementById('preview-phone').textContent = phone;
    document.getElementById('preview-linkedin').textContent = linkedin;
    document.getElementById('preview-linkedin').href = linkedin;
    document.getElementById('preview-summary').textContent = summary;
    document.getElementById('preview-education').textContent = education;
    document.getElementById('preview-work').textContent = work;
    document.getElementById('preview-skills').textContent = skills;

    // Display modal
    document.getElementById('resume-modal').style.display = 'block';
}

// Function to close modal
function closeModal() {
    document.getElementById('resume-modal').style.display = 'none';
}

// Close modal when clicking outside content
window.onclick = function(event) {
    const modal = document.getElementById('resume-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
