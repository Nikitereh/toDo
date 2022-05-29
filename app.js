const click = document.querySelector('#click');
click.addEventListener('click', () => {
  alert('Thanks for your interest in my work! If you have found something that can be fixed or imporved, please contact me :)')
});

const info = document.querySelector('#info');
info.addEventListener('click', () => {
  alert('TASK MANAGER \n\nRightMouseButton(RMB) - make task important\nRMB + Ctrl - delete task')
})

const input = document.querySelector('.message');
const btn = document.querySelector('.addTask');
const ul = document.querySelector('ul');

let i = 1;

let todoList = [];

btn.addEventListener('click', () => {
  let task = {
    value: '',
  }
  task.value = input.value.toLowerCase();
  todoList.push(task);
  render();
});

ul.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  li = e.target;
  li.classList.toggle('important');
  if (li.classList.contains('important')) {
    li.textContent = li.textContent.toUpperCase();
    li.style = 'color:red';
  } else {
    li.textContent = li.textContent.toLowerCase();
    li.style = 'color:black';
  }
  if(e.ctrlKey) {
    e.target.remove();
  }
});

function render () {
  if(input.value.length < 1 || input.value.startsWith(' ')) {
    input.style = 'border-color:red';
    throw new Error('description field is empty');
  } else {
    const li = document.createElement('li');
  li.textContent = input.value.toLowerCase();
  li.id = `item-${i}`;
  i += 1;
  input.value = '';
  input.style = 'border-color:black';
  input.focus();
  ul.prepend(li);
  }
};

