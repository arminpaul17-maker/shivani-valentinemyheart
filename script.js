document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");

    // Show first question
    app.innerHTML = `
        <h1>${config.questions.first.text}</h1>
        <button id="yesBtn">${config.questions.first.yesBtn}</button>
        <button id="noBtn">${config.questions.first.noBtn}</button>
    `;

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    yesBtn.addEventListener("click", () => {
        app.innerHTML = `<h2>${config.celebration.title}</h2>
                         <p>${config.celebration.message}</p>
                         <p>${config.celebration.emojis}</p>`;
    });

    noBtn.addEventListener("mouseover", () => {
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 200 - 100;
        noBtn.style.transform = `translate(${x}px, ${y}px)`;
    });
});
