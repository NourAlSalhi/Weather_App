import { Date, Header,Search } from "./components"

const App = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500 font-nunito'>
      <Header />
      <Search/>
      <Date/>
    </div>
  )
}

export default App
