import searchSome from './urlInform'
import listItems from './list-item.hbs'
import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';
import PNotifyButtons from '../node_modules/pnotify/dist/es/PNotifyButtons.js';
let numberPage = 0;
let textOnInput = '';
const refs = {
    searchForm: document.querySelector('#search-form'),
    articlList: document.querySelector('#articlList'),
    onImput: document.querySelector('#input'),
    loadButton: document.querySelector('#button')
}; 
refs.searchForm.addEventListener('submit', searchSabmitHendler);
refs.loadButton.addEventListener('click', submitButon);


function  parceData(data){
    const build = listItems(data);
    refs.articlList.insertAdjacentHTML('beforeend', build);

    const scrolForWindow = {
        top: document.body.scrollHeight,
        behavior: "smooth"
    };
    window.scrollTo(scrolForWindow)
}

function searchSabmitHendler(e){
    e.preventDefault();
    submitButon();
}

function clearList(){
    refs.articlList.innerHTML = '';
};
function submitButon(e){
if(textOnInput !== refs.onImput.value && numberPage >= 1){
    clearList();
    numberPage = 0;
    textOnInput = refs.onImput.value;
}
    searchSome(refs.onImput.value, ++numberPage, parceData);
}

