import { BrowserRouter } from "react-router-dom"

import { About, Experience, Feedbacks, Tech, Works } from "./components"
import AppLayout from "./components/AppLayout"

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
      </AppLayout>
    </BrowserRouter>
  )
}

export default App
