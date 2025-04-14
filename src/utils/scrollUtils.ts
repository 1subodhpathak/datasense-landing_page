export const scrollToSection = (sectionId: string, currentPath: string) => {
  if (currentPath !== '/') {
    // Store the target section in sessionStorage before navigation
    sessionStorage.setItem('scrollTarget', sectionId);
    window.location.href = '/';
    return;
  }

  // If we're on homepage, scroll smoothly
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState({}, '', `/#${sectionId}`);
  }
};