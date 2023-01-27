import App from './App'
import { StyledEngineProvider } from '@mui/material'

export function Root() {
  return (
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  )
}
