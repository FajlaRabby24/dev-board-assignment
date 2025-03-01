const cardArray = [
    { id: 0, subTitlte: "ShopEase", title: 'Fix Mobile Button Issue ', description: "Fix mobile button issues by ensuring responsive design, using correct CSS styles, touch-friendly sizes, and debugging with browser developer tools.", date: "21 March 2025" },
    { id: 1, subTitlte: "CloudSync", title: 'Add Dark Mode', description: "Add dark mode using CSS variables, media queries, or JavaScript toggle button to switch themes dynamically for better user experience.", date: "21 March 2025" },
    { id: 2, subTitlte: "SwiftPay", title: 'Optimize  Home page ', description: "DOptimize the homepage by improving load speed, using efficient images, minimizing CSS/JS, enabling caching, optimizing SEO, and ensuring responsive design.", date: "21 March 2025" },
    { id: 3, subTitlte: "Meta", title: 'Add new emoji 🤲', description: "Add new emojis using Unicode characters, custom images, or emoji libraries in apps, websites, or messaging platforms for better user engagement.", date: "21 March 2025" },
    { id: 4, subTitlte: "Google LLC", title: 'Integrate OpenAI API ', description: "Integrate OpenAI API by obtaining an API key, making HTTP requests, handling responses, and implementing features like chatbots, content generation, or automation.", date: "21 March 2025" },
    { id: 5, subTitlte: "Glassdoar", title: 'Improve Job searching ', description: "Improve job searching by optimizing resumes, networking, using job boards, enhancing skills, tailoring applications, and staying updated on industry trends.", date: "21 March 2025" },
]



for (const card of cardArray) {
    selectByGetElementById('main-card-container').innerHTML += mainContainerCard(card);
}


selectByGetElementById('discover').addEventListener('click', (event) => {
    window.location = './blog.html'
})