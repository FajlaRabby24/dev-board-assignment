const selectByGetElementById = (value) =>{
    return document.getElementById(value);
}



const mainContainerCard = (card) => {
    return `
         <div class=" px-5 py-8 bg-[#f4f7ff] shadow-sm rounded-xl">
            <span class="rounded-lg bg-white px-6 py-3">${card.subTitlte}</span>
            <h1 class="text-2xl mt-6 font-semibold">${card.title}</h1>
            <div class="bg-white px-3 py-2 shadow-sm rounded-lg my-4 ">
                <p title="${card.description}" class="text-gray-400  whitespace-nowrap  overflow-hidden text-ellipsis">${card.description}</p>
            </div>
            <div class="flex items-center justify-between border-t-2 border-dashed pt-5 mt-5" id="updated-btn">
                <div>
                    <p class="text-gray-400">Deadline</p>
                    <h4 class="font-semibold">${card.date}</h4>
                </div>
                <button class="btn btn-primary"  onclick='updateBoard(event)'>Completed</button>
            </div>
        </div>
    `
}




const blogsContainerCard = (blog) =>{
    return `
        <div class="bg-white px-6 py-4 rounded-xl mt-6">
                <h1 class="text-2xl font-semibold border-b-2 border-dashed pb-4">Question-${blog.questionNo}: ${blog.question}</h1>
                <p class="text-gray-600 mt-4">${blog.answer}</p>
            </div>
    `
}