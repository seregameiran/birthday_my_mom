// =============== ОБЩИЙ СКРИПТ ДЛЯ САЙТА МАМЫ ===============

// Получаем имя мамы из localStorage
function getMomName() {
    return localStorage.getItem('momName') || 'мама';
}

// Вставляем имя во все места с классом .insert-name
function insertNameIntoText() {
    const nameElements = document.querySelectorAll('.insert-name');
    const momName = getMomName();
    
    nameElements.forEach(el => {
        el.textContent = momName;
    });
}

// Запускаем при загрузке страницы
document.addEventListener('DOMContentLoaded', insertNameIntoText);