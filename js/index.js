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



const randomBodycolor = ['#f4f7ff', '#e7f8d7', '#c8e3cd', '#eba6af', '#d3ae9f'];
let selectBodycolorIndex = 0;
const colorPicker = () => {
    if (selectBodycolorIndex < randomBodycolor.length - 1) {
        selectBodycolorIndex++
    } else {
        selectBodycolorIndex = 0;
    }
}
selectByGetElementById('change-theme').addEventListener('click', (event) => {
    colorPicker();
    document.querySelector('body').style.backgroundColor = randomBodycolor[selectBodycolorIndex];
})



const fullDate = new Date().toDateString().toString();
const bar = fullDate.slice(0, 4);
const date = fullDate.slice(4);
selectByGetElementById('bar').textContent = bar;
selectByGetElementById('date').textContent = date;



const activitys = [];
const updateBoard = (event) => {
    const target = event.target;
    const assignedTask = selectByGetElementById('assined-task');
    const checkboxCount = selectByGetElementById('checkbox-count');
    alert('Board updated Successfully');
    target.setAttribute('disabled', true);
    assignedTask.textContent = parseInt(assignedTask.textContent) - 1;
    checkboxCount.textContent = parseInt(checkboxCount.textContent) + 1;
    const date = new Date();
    const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    activitys.push({
        title: target.parentElement.parentElement.children[1].innerText,
        time: time
    });
    clearActivityHistory();
    for (const activity of activitys) {
        showActivity(activity);
    }
    if (assignedTask.textContent == 0) {
        alert('Congrates!!! You have completed all the current task.')
    }
}

const clearActivityHistory = () => {
    return selectByGetElementById('activity-log-history').innerHTML = "";
}

selectByGetElementById('clear-activity-history').addEventListener('click', clearActivityHistory);




const showActivity = (activity) => {
    const div = document.createElement('div');
    const className = 'bg-[#f4f7ff] px-5 py-3 rounded-lg mt-4 shadow-sm';
    div.setAttribute('class', className);
    div.innerText = `You have completed the task ${activity.title} At ${activity.time}`;
    selectByGetElementById('activity-log-history').appendChild(div);
}