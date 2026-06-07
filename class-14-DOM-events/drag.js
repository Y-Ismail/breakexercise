const STORAGE_KEY = "kanban-cards"

let cards = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

const form = document.getElementById('cardForm');

function saveCards(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cards))
}

function createCardElement(card){
    const div = document.createElement('div')
    div.className = `card ${card.priority}`;
    div.draggable = true;
    div.dataset.id = card.id;

    div.innerHTML = `
    <h3>${card.title}</h3>
    <p>${card.description}</p>
    <p><strong>Priority:</strong>${card.priority}</p>
    <p><strong>Due:</strong>${card.dueDate}</p>

    <div class="card-buttons">
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    </div>
    `;


    //Drag start
    div.addEventListener('dragstart',()=> {
        div.classList.add('dragging')
    });

    div.addEventListener('dragend',()=> {
        div.classList.remove('dragging')
    })

    div.querySelector('.delete-btn').addEventListener('click', ()=> {
        cards = cards.filter(c => c.id !== card.id);

        saveCards();
        renderBoard()
    })

    //Edit
    div.querySelector('.edit-btn').addEventListener('click', () => {
        const title = prompt("Title", card.title);

        if(title === null) return;

        const description = prompt("Description", card.description)

        const priority = prompt("Priority(low.medium,high)", card.priority)

        const dueDate = prompt("Due Date", card.dueDate);

        Object.assign(card, {
            title, description,priority,dueDate
        });

        saveCards();
        renderBoard()
        
    })

    return div
    
}

function renderBoard(){
    document.querySelectorAll(".column").forEach(column => {
        column.querySelectorAll('.card').forEach(card => card.remove());
    });

    cards.forEach(card => {
        const column = document.querySelector(`[data-status="${card.status}"]`);

        column.appendChild(createCardElement(card));
    });
    
    
}

form.addEventListener('submit', e => {
    e.preventDefault()

    const card = {
        id: crypto.randomUUID(),
        title: document.getElementById("title.value"),
        description: document.getElementById("description.value"),
        priority: document.getElementById("priority.value"),
        dueDate: document.getElementById("dueDate.value"),
        status: "todo"
    };

    cards.push(card)
    saveCards()
    renderBoard()
    form.reset();
})


// Drag drop columns
document.querySelectorAll(".column").forEach(column => {
    column.addEventListener('dragover', e => {
        e.preventDefault()
    })
})