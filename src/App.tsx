import '@/assets/css/imports.scss'
import Head from './components/modules/Head/Head'
import Header from './components/modules/Header/Header'
import Skills from './components/modules/Skills/Skills'
import Experience from './components/modules/Experience/Experience'
import Works from './components/modules/Works/Works'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Head />
      <Skills />
      <Experience />
      <Works />
    </Provider>
  )
}

export default App
