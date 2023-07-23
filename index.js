const drawUsers = (data, toDolist) => {
  toDolist.innerHTML = "";

  data.forEach((item) => {
    toDolist.innerHTML += `
    <li class='toDo-card'id="${item.id}">
    <div class="text-block">
    <div>Title:${item.title}</div>
    <div>Description:${item.description}</div>
    </div>
    <div class="button-block">
    <div><button class="edit-card" id="edit-card">Edit</button></div>
    <div><button class="delete-card">DELETE</button></div>
    </div>
  </li>`;
  });
};


const submitHandler = () => {
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");

  
  const toDO = {
    id: Date.now(),
    title: title.value,
    description: description.value,
  };
  return toDO;
};


const deleteHandler = (event, data) => {
  if (event.target.classList.contains("delete-card")) {
    const li = event.target.closest(".toDo-card");
    const toDoId = +li.id;
    const newData = data.filter((item) => item.id !== toDoId);
    return newData;
  }
  return data;
};



const init = () => {
  let data = [];
  const submit = document.querySelector("#submit");
  const toDolist = document.querySelector("#toDolist");


 
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    const user = submitHandler();
    data.push(user);
    drawUsers(data, toDolist);

  });
  toDolist.addEventListener("click", (event) => {
    const newData = deleteHandler (event, data);
    data = newData;
    drawUsers(data, toDolist);
   })
  
   }

  init();



