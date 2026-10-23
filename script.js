const itens = document.querySelectorAll('.item');
const mochila = document.getElementById('mochila');
const inventario = document.querySelector('.inventario'); // Seleciona o inventário
const statusText = document.getElementById('status');

// Evento disparado ao começar a arrastar o item
itens.forEach(item => {
    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

// --- LÓGICA DA MOCHILA (Equipar) ---
mochila.addEventListener('dragover', (e) => {
    e.preventDefault();
    mochila.classList.add('over');
});

mochila.addEventListener('dragleave', (e) => {
    mochila.classList.remove('over');
});

mochila.addEventListener('drop', (e) => {
    e.preventDefault();
    mochila.classList.remove('over');

    const id = e.dataTransfer.getData('text/plain');
    const itemMovido = document.getElementById(id);

    if(itemMovido) {
        mochila.appendChild(itemMovido);
        if(statusText) {
            statusText.textContent = `Equipado: ${itemMovido.innerText}`;
        }
    }
});

// --- LÓGICA DO INVENTÁRIO (Desequipar/Devolver) ---
inventario.addEventListener('dragover', (e) => {
    e.preventDefault();
    inventario.classList.add('over');
});

inventario.addEventListener('dragleave', (e) => {
    inventario.classList.remove('over');
});

inventario.addEventListener('drop', (e) => {
    e.preventDefault();
    inventario.classList.remove('over');

    const id = e.dataTransfer.getData('text/plain');
    const itemMovido = document.getElementById(id);

    if(itemMovido) {
        inventario.appendChild(itemMovido); // Move de volta para o inventário
        if(statusText) {
            statusText.textContent = `Guardado: ${itemMovido.innerText}`;
        }
    }
});