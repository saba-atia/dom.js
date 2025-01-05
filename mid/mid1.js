function highlightLongWords() {
    const paragraph = document.getElementById("paregraph");
    const words = paragraph.innerText.split(" ");
    const highlightedText = words.map(word => {
        if (word.length > 8) {
            return `<span class="highlight">${word}</span>`;
        } else {
            return word;
        }
    }).join(" ");
    paragraph.innerHTML = highlightedText;
}

highlightLongWords();