const url = "https://crudcrud.com/api/9bde97e1ae7a427d92093b622c1bf429/todo";

// Mendapatkan daftar todo dari API
async function getTodoList() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Menambahkan todo ke API
async function addTodoItem(todo) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  const data = await response.json();
  return data;
}

// Mengubah todo di API berdasarkan id
async function updateTodoItem(id, todo) {
  const response = await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  const data = await response.json();
  return data;
}

// Menghapus todo dari API berdasarkan id
async function deleteTodoItem(id) {
  const response = await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}

// Memeriksa koneksi API
async function checkAPIStatus() {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      console.log("API terhubung!");
    } else {
      console.log("API tidak terhubung");
    }
  } catch (error) {
    console.log("API tidak terhubung");
  }
}

// Menambahkan todo ke daftar
async function addTodo() {
  const todoInput = document.getElementById("todo-input");
  const todoText = todoInput.value;
  if (todoText) {
    const newTodo = { title: todoText, completed: false };
    try {
      const response = await addTodoItem(newTodo);
      console.log("Data berhasil ditambahkan:", response);
      todoInput.value = "";
    } catch (error) {
      console.log("Gagal menambahkan data:", error);
    }
  }
}

// Memanggil fungsi untuk memeriksa koneksi API
checkAPIStatus();
