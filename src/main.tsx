import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodoApp } from './components/TodoApp'
import './styles/styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoApp></TodoApp>
  </React.StrictMode>,
)
