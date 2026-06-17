// 1. Funcionalidade do Modo Escuro
const btnDarkMode = document.getElementById('toggle-dark-mode');
btnDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 2. Validador do Formulário / Quiz
const quizForm = document.getElementById('quiz-form');
const resultadoDiv = document.getElementById('quiz-resultado');

quizForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede a página de recarregar
    
    const resposta selecionada = document.querySelector('input[name="pergunta1"]:checked');
    
    if (!respostaSelecionada) {
        resultadoDiv.innerHTML = "<p style='color: orange;'>Por favor, selecione uma opção!</p>";
        return;
    }
    
    if (respostaSelecionada.value === 'correto') {
        resultadoDiv.innerHTML = "<p style='color: green;'><strong>Correto!</strong> Sempre cheque as fontes antes de repassar.</p>";
    } else {
        resultadoDiv.innerHTML = "<p style='color: red;'><strong>Incorreto.</strong> Compartilhar sem checar espalha desinformação!</p>";
    }
});
