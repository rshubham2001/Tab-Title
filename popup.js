const btn = document.getElementById("btn");
const title = document.getElementById("title");

const close = document.getElementById("close");

btn.addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    title.innerText = tab.title;
});

close.addEventListener('click', () => {
    window.close();
})