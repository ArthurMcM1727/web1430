

// Create the paragraph
const paragraph = document.createElement("p");
paragraph.textContent = "";
document.getElementById("app").appendChild(paragraph);

function addItem() {
    const input = document.getElementById("itemInput");
    const value = input.value.trim();
    if (value === "") {
        paragraph.textContent = "Please enter an item.";
        return;
    }
    // Create li
    const li = document.createElement("li");
    li.textContent = value;
    document.getElementById("itemList").appendChild(li);
    // Change color
    const colors = ["lightblue", "lightgreen", "lightyellow", "lightpink"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    // Update paragraph
    paragraph.textContent = `Added: ${value}`;
    // Clear input
    input.value = "";
}