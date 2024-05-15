import '@/assets/css/imports.scss'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Head from 'components/modules/Head/Head'
import Header from 'components/modules/Header/Header'
import Skills from 'components/modules/Skills/Skills'
import Experience from 'components/modules/Experience/Experience'
import Works from 'components/modules/Works/Works'
import Scheme from 'components/modules/Scheme/Scheme'
import Contacts from 'components/modules/Contacts/Contacts'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Head />
      <Skills />
      <Experience />
      <Works />
      <Scheme />
      <Contacts />
    </Provider>
  )
}

export default App
