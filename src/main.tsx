import '@fontsource/poppins'

import { ChakraProvider } from '@chakra-ui/react'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { App } from '@/App'
import { ActivityProvider, TodoProvider } from '@/context'
import { theme } from '@/styles/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <TodoProvider>
      <ActivityProvider>
        <ChakraProvider theme={theme} resetCSS>
          <App />
        </ChakraProvider>
      </ActivityProvider>
    </TodoProvider>
  </StrictMode>
)
