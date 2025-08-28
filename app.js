const addTodoBtn = document.getElementById("addTodoBtn");
    const inputTag = document.getElementById("todoInput");
    const todoListUl = document.getElementById("todoList");
    const itemsLeftSpan = document.getElementById("itemsLeft");
    const filterBtns = document.querySelectorAll(".filter-btn");
    const clearCompletedBtn = document.getElementById("clearCompletedBtn");
    const themeToggle = document.getElementById("toggleThemeBtn");

    let todos = [];
    let currentFilter = "all";

    // theme initialization
    const initializeTheme = () => {
      const savedTheme = localStorage?.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      
      if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        document.body.classList.add("dark");
        themeToggle.checked = true;
      } else {
        document.body.classList.remove("dark");
        themeToggle.checked = false;
      }
    };

    //  localStorage handling
    const loadTodos = () => {
      try {
        const todosString = localStorage?.getItem("todos");
        if (todosString) {
          todos = JSON.parse(todosString);
        }
        const savedFilter = localStorage?.getItem("currentFilter");
        if (savedFilter) {
          currentFilter = savedFilter;
        }
      } catch (error) {
        console.warn("Failed to load todos from localStorage:", error);
        todos = [];
      }
    };

    const saveTodos = () => {
      try {
        localStorage?.setItem("todos", JSON.stringify(todos));
      } catch (error) {
        console.warn("Failed to save todos to localStorage:", error);
      }
    };

    const updateItemsLeft = () => {
      const activeTodos = todos.filter(todo => !todo.isCompleted).length;
      itemsLeftSpan.textContent = `${activeTodos} item${activeTodos !== 1 ? "s" : ""} left`;
    };

    const populateTodos = () => {
      let filteredTodos = todos;

      if (currentFilter === "active") {
        filteredTodos = todos.filter(todo => !todo.isCompleted);
      } else if (currentFilter === "completed") {
        filteredTodos = todos.filter(todo => todo.isCompleted);
      }

      let string = "";
      for (const todo of filteredTodos) {
        string += `
          <li id="todo-${todo.id}" class="todo-item ${todo.isCompleted ? "completed" : ""}">
            <input type="checkbox" class="todo-checkbox" ${todo.isCompleted ? "checked" : ""}>
            <span class="todo-text">${todo.title}</span>
            <button class="delete-btn" aria-label="Delete task">×</button>
          </li>`;
      }
      todoListUl.innerHTML = string;

      // Checkbox toggle
      document.querySelectorAll(".todo-checkbox").forEach((element) => {
        element.addEventListener("click", (e) => {
          const liId = e.target.parentNode.id.replace("todo-", "");
          todos = todos.map((todo) =>
            todo.id == liId ? { ...todo, isCompleted: e.target.checked } : todo
          );
          saveTodos();
          e.target.parentNode.classList.toggle("completed", e.target.checked);
          updateItemsLeft();
        });
      });

      // Delete
      document.querySelectorAll(".delete-btn").forEach((element) => {
        element.addEventListener("click", (e) => {
          const li = e.target.parentNode;
          li.classList.add("removed");
          setTimeout(() => {
            const liId = li.id.replace("todo-", "");
            todos = todos.filter((todo) => todo.id != liId);
            saveTodos();
            populateTodos();
            updateItemsLeft();
          }, 300);
        });
      });

      updateItemsLeft();

      // Update active filter button
      filterBtns.forEach(b => b.classList.remove("active"));
      const activeBtn = document.querySelector(`[data-filter="${currentFilter}"]`);
      if (activeBtn) {
        activeBtn.classList.add("active");
      }
    };

    const addTodo = () => {
      let todoText = inputTag.value.trim();
      if (!todoText) {
        alert("Please enter a task!");
        inputTag.focus();
        return;
      }

      inputTag.value = "";
      let todo = { id: Date.now(), title: todoText, isCompleted: false };
      todos.push(todo);
      saveTodos();
      populateTodos();
    };

    // Event listeners
    addTodoBtn.addEventListener("click", addTodo);
    inputTag.addEventListener("keydown", (e) => { 
      if (e.key === "Enter") addTodo(); 
    });

    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        try {
          localStorage?.setItem("currentFilter", currentFilter);
        } catch (error) {
          console.warn("Failed to save filter preference:", error);
        }
        populateTodos();
      });
    });

    clearCompletedBtn.addEventListener("click", () => {
      todos = todos.filter(todo => !todo.isCompleted);
      saveTodos();
      populateTodos();
    });

    // Better theme toggle handling
    themeToggle.addEventListener("change", () => {
      if (themeToggle.checked) {
        document.body.classList.add("dark");
        try {
          localStorage?.setItem("theme", "dark");
        } catch (error) {
          console.warn("Failed to save theme preference:", error);
        }
      } else {
        document.body.classList.remove("dark");
        try {
          localStorage?.setItem("theme", "light");
        } catch (error) {
          console.warn("Failed to save theme preference:", error);
        }
      }
    });


   
    loadTodos();
    initializeTheme();
    populateTodos();