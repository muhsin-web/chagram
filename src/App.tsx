import AuthLayout from './_auth/AuthLayout'
import SigninForm from './_auth/form/SigninForm'
import SignupForm from './_auth/form/SignupForm'
import RootLayout from './_root/RootLayout'
import { Home } from './_root/pages'
import { Toaster } from './components/ui/toaster'
import './global.css'
import { Route, Routes } from 'react-router'
const App = () => {
  return (
   <main className='flex h-screen'>
    <Routes>
      {/* public routes */}
      <Route element={<AuthLayout />}>
        <Route path='/sign-in' element={<SigninForm /> }/>
        <Route path='/sign-up' element={<SignupForm /> }/>
      </Route>

      {/* private routes */}
      <Route element={<RootLayout />}>
        <Route index element={<Home />}/>
      </Route>
    </Routes>
    <Toaster />
   </main>
  )
}

export default App