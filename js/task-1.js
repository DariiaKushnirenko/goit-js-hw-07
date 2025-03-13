const categories = document.querySelector("ul#categories");

const listItem = categories.querySelectorAll("li.item");
console.log (`Number of categories: ${listItem.length}`)
listItem.forEach(function (item) {
    const title = item.querySelector("h2");
    const elements = item.querySelectorAll("li");
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${elements.length}`);
});
