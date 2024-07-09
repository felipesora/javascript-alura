// encontrar o botao adiconar tarefa

const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');

const tarefas = []

btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.toggle('hidden')
})

formAdicionarTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault(); // ele vai prevenir o padrão, que no caso é recarregar a página quando o usuario der submit no form
    //receber valor do textArea
    const tarefa = {
        descricao : textArea.value
    }
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', tarefas) //guarda a lista de tarefas dentro de um localStorage
})