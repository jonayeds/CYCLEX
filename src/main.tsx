import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Toaster} from 'sonner'
import { RouterProvider } from 'react-router-dom'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'
import { router } from './routes/routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster/>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
