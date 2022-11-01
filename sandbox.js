const addform=document.querySelector('.add');
const list=document.querySelector('.todos');
const generate = ans =>{
    const html=` <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>text</span>
    <span>${ans}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;

  list.innerHTML+=html;
}
addform.addEventListener('submit',e=>{
    e.preventDefault();
    const ans=addform.add.value.trim();
    generate(ans);
    addform.reset();
});