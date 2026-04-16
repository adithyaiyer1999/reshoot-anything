// Auto-play videos when they enter the viewport
document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll("video[data-autoplay]");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );
    videos.forEach((v) => observer.observe(v));
  } else {
    // Fallback: just play everything
    videos.forEach((v) => v.play().catch(() => {}));
  }

  // Copy BibTeX button
  const copyBtn = document.getElementById("copy-bibtex");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const text = document.getElementById("bibtex-text").innerText;
      navigator.clipboard.writeText(text).then(() => {
        copyBtn.textContent = "Copied!";
        setTimeout(() => (copyBtn.textContent = "Copy"), 2000);
      });
    });
  }
});
