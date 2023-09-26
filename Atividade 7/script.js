const listaPessoas = document.getElementById("listaPessoas");
const btAnterior = document.getElementById("btAnterior");
const btProxima = document.getElementById("btProxima");

const exibirLista = (lista) => {
    try {
        listaPessoas.innerHTML = "";
        for (let i = 0; i < lista.length; ++i) {
            const li = document.createElement("li");
            const text = document.createTextNode(`Name: ${lista[i].name}, E-mail: ${lista[i].email}`);
            li.appendChild(text);
            listaPessoas.appendChild(li);
        }
    } catch (error){
        console.error('Error', error);
    }
};

const configurarBotoes = (data) => {
    const { previous, next } = data;

    btAnterior.disabled = previous === null;
    btAnterior.onclick = () => {
        fetchAPI(previous);
        btAnterior.disabled = true;
    };

    btProxima.disabled = next === null;
    btProxima.onclick = () => {
        fetchAPI(next);
        btProxima.disabled = true;
    };
};

const fetchAPI = (url) => {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            exibirLista(data.results);
            configurarBotoes(data);
        });
};

fetchAPI("https://jsonplaceholder.typicode.com/users");