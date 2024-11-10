function generateResume(): void {

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    const summary = (document.getElementById('summary') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const work = (document.getElementById('work') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;


    (document.getElementById('preview-name') as HTMLElement).textContent = name;
    (document.getElementById('preview-email') as HTMLElement).textContent = email;
    (document.getElementById('preview-phone') as HTMLElement).textContent = phone;
    (document.getElementById('preview-linkedin') as HTMLAnchorElement).textContent = linkedin;
    (document.getElementById('preview-linkedin') as HTMLAnchorElement).href = linkedin;
    (document.getElementById('preview-summary') as HTMLElement).textContent = summary;
    (document.getElementById('preview-education') as HTMLElement).textContent = education;
    (document.getElementById('preview-work') as HTMLElement).textContent = work;
    (document.getElementById('preview-skills') as HTMLElement).textContent = skills;


    (document.getElementById('resume-modal') as HTMLElement).style.display = 'block';
}


function closeModal(): void {
    (document.getElementById('resume-modal') as HTMLElement).style.display = 'none';
}


window.onclick = function(event: MouseEvent): void {
    const modal = document.getElementById('resume-modal') as HTMLElement;
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
