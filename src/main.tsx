import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <App/>
  </StrictMode>,
)

// dentro de StrictMode eu posso por exemplo criar um html completo, mas não é uma boa prática pq o intuito é usar os componentes do react

// esses .tsx são typescript junto com jsx tsx está dentro dos arquivos do react
