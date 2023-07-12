let selectLanguage = document.getElementById('select_language')
let EnglishText = document.querySelector('.Eng')
let UkrainianText = document.querySelector('.Ukr')
let RussianText = document.querySelector('.Ru')

selectLanguage.addEventListener('change', function (){
    let selectedValue = selectLanguage.options[selectLanguage.selectedIndex].value;

    if (selectedValue === "English_language") {
        UkrainianText.classList.add('Ukr')
        RussianText.classList.add('Ru')
        EnglishText.classList.add('Eng')
        EnglishText.classList.remove('Eng_Hidden')
    }

    if (selectedValue === "Ukrainian_language") {
        EnglishText.classList.add('Eng_Hidden')
        UkrainianText.classList.remove('Ukr')
        UkrainianText.classList.add('UkrainianText_select')
        RussianText.classList.add('Ru')
    }

    if (selectedValue === "Russian_language") {
        UkrainianText.classList.add('Ukr')
        EnglishText.classList.add('Eng_Hidden')
        RussianText.classList.remove('Ru')
        RussianText.classList.add('RussianText_select')

    }
})


