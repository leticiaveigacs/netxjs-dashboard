/* "use client";

import React, { useState } from 'react'; // Importação correta do React e useState


// Componente Header
const Header = ({ name }) => <h1>{name}</h1>;

// Componente Pesquisar
const Pesquisar = ({ onSearch }) => {
  const [pesquisar, setPesquisar] = useState("");

  const handleSearch = () => {
    onSearch(pesquisar);
  };

  return (
    <>
      <h2>Pesquisar:</h2>
      <input
        type='text'
        value={pesquisar}
        onChange={(e) => setPesquisar(e.target.value)}
        placeholder="Pesquise Aqui"
      />
      <button onClick={handleSearch}>Pesquisar</button>
    </>
  );
};

// Componente Filtrar
const Filtrar = ({ onFilterChange, onSortChange }) => {
  const [filtrar, setFiltrar] = useState("All");
  const [sort, setSort] = useState("Asc");

  const handleFilterChange = (e) => {
    const newFilter = e.target.value;
    setFiltrar(newFilter);
    onFilterChange(newFilter);
  };

  const handleSortChange = (newSortOrder) => {
    setSort(newSortOrder);
    onSortChange(newSortOrder);
  };

  return (
    <>
      <div id="filtrar">
        <h2>Filtrar:</h2>
        <select value={filtrar} onChange={handleFilterChange}>
          <option value="All">Todas</option>
          <option value="To Do">To Do</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <div id="ordenar">
        <h2>Ordenar:</h2>
        <button onClick={() => handleSortChange("Asc")}>Ascendente</button>
        <button onClick={() => handleSortChange("Desc")}>Descendente</button>
      </div>
    </>
  );
};

// Componente CriarTarefas
const CriarTarefas = ({ onAddTask }) => {
  const [texto, setTexto] = useState("");
  const [categoria, setCategoria] = useState("To Do");
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [nome, setNome] = useState("");

  const handleAddTask = () => {
    const novaTarefa = {
      id: Math.floor(Math.random() * 10000),
      texto,
      categoria,
      isCompleted: false,
      dataInicio,
      dataFim,
      nome,
    };
    onAddTask(novaTarefa);
    setTexto(""); // Limpa o campo após adicionar a tarefa
    setCategoria("To Do");
    setDataInicio("");
    setDataFim("");
    setNome("");
  };

  return (
    <>
      <h2>Criar Tarefas:</h2>
      <input
        type='text'
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder='Crie a nova tarefa aqui'
      />
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        <option value="To Do">To Do</option>
        <option value="Doing">Doing</option>
        <option value="Done">Done</option>
      </select>
      <input
        type='date'
        value={dataInicio}
        onChange={(e) => setDataInicio(e.target.value)}
        placeholder='Data de Início'
      />
      <input
        type='date'
        value={dataFim}
        onChange={(e) => setDataFim(e.target.value)}
        placeholder='Data de Fim'
      />
      <input
        type='text'
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder='Nome do Responsável'
      />
      <button onClick={handleAddTask}>Adicionar Tarefa</button>
    </>
  );
};

// Componente App
function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  // Função para adicionar uma nova tarefa
  const addTask = (task) => {
    setTodos([...todos, task]);
  };

  // Função para remover uma tarefa pelo ID
  const removeTodo = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };

  // Função para alternar o estado de conclusão de uma tarefa
  const completeTodo = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  // Função para filtrar e ordenar as tarefas
  const getFilteredTodos = () => {
    let filteredTodos = [...todos];

    // Filtrar por categoria
    if (filter !== "All") {
      filteredTodos = filteredTodos.filter(todo => todo.categoria === filter);
    }

    // Filtrar por texto de pesquisa
    if (search) {
      filteredTodos = filteredTodos.filter(todo =>
        todo.texto.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Ordenar
    if (sort === "Asc") {
      filteredTodos = filteredTodos.sort((a, b) =>
        a.texto.localeCompare(b.texto)
      );
    } else if (sort === "Desc") {
      filteredTodos = filteredTodos.sort((a, b) =>
        b.texto.localeCompare(a.texto)
      );
    }

    return filteredTodos;
  };

  return (
    <>
      <Header name="Lista de Tarefas" />
      <Pesquisar onSearch={setSearch} />
      <hr />
      <Filtrar onFilterChange={setFilter} onSortChange={setSort} />
      <hr />
      <CriarTarefas onAddTask={addTask} />
    
      <ul>
        {getFilteredTodos().map(task => (
          <li key={task.id}>
            {task.texto} - {task.categoria} - {task.dataInicio} - {task.dataFim} - {task.nome}
            <button onClick={() => completeTodo(task.id)}>
              {task.isCompleted ? 'Incompleto' : 'Completo'}
            </button>
            <button onClick={() => removeTodo(task.id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

// Export default function Page
export default function Page() {
  return <App />;
}
 */
