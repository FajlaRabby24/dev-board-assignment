const blogs = [
    { id: 0, questionNo: 1, question: "What are the different ways to select an element in the DOM?", answer: "There are many ways to select elements, some of them are: 1. <strong >getElementById</strong>('id') 2. <strong >querySelector</strong>('.className') 3. <strong >querySelectorAll</strong>('className') 4. <strong >getElementsByClassName</strong>('className') 5. <strong >getElementsByTagName</strong>('tagName')" },
    { id: 1, questionNo: 2, question: "What is the difference between innerHTML, innerText, and textContent ?", answer: "First, their job is to fetch data from an appliance and restore the data. All of these can be used to retrieve and restore data. But there are some differences in their powers. <strong >innerHTML</strong>: It can return everything in an element, such as a comment, text, tags, and those that are not displayed and have visibility hidden, etc. <strong >innerText</strong>: It can only return the text of an element and not do anything else, such as not showing tags, comments, or hiding visibility.  <strong >textContent</strong>: Returns everything except comments and tags." },
    { id: 2, questionNo: 3, question: "What is event delegation in the DOM?", answer: "Event Delegation is a JavaScript technique where events are handled by a parent element by adding an event listener to its child elements. <strong>Benefits of event delegation</strong>: Low memory consumption, events will work on new elements, code is simple and clean, performance is good, suitable for dynamic content" },
    { id: 3, questionNo: 4, question: "What is event bubbling in the DOM?", answer: "Event Bubbling is where when an event is triggered on a <strong>child element</strong>, that event propagates to its <strong>parent, grandparent</strong>, and <strong>higher elements</strong>, all the way up to the <strong>root element</strong>." },
    { id: 4, questionNo: 5, question: " How do you create, add, and remove elements using JavaScript?", answer: "To create an element with JavaScript, the <strong>createElement()</strong> method is used, to add an element, the <strong>appendChild()</strong> method is used, To remove, the <strong>remove()</strong> method is used," },
]

for (const blog of blogs) {
    selectByGetElementById('blogs-container').innerHTML += blogsContainerCard(blog);
}



selectByGetElementById('back-to-desk').addEventListener('click', (event) => {
    window.location = './index.html'
})