document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".skill-fill");

    const animate = () => {
        bars.forEach(bar => {
            const value = bar.getAttribute("data-skill");
            bar.style.setProperty("--skill", value + "%");
            bar.style.transform = "scaleX(1)";
        });
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate();
            }
        });
    }, { threshold: 0.3 });

    bars.forEach(bar => observer.observe(bar));
});