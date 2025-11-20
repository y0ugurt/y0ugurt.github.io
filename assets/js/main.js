document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.questions__question');
    questions.forEach(question => {
        question.addEventListener('click', function() {
            const item = this.parentElement;
            const answer = item.querySelector('.questions__answer');
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.questions__item.active').forEach(activeItem => {
                if (activeItem !== item) {
                    activeItem.classList.remove('active');
                    const activeAnswer = activeItem.querySelector('.questions__answer');
                    activeAnswer.style.height = '0';
                }
            });
            if (!isActive) {
                item.classList.add('active');
                answer.style.height = answer.scrollHeight + 'px';
            } else {
                item.classList.remove('active');
                answer.style.height = '0';
            }
        });
    });
});