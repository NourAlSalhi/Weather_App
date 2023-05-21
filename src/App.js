import { Date, Header,Search, TemperatureDetails } from "./components"

const App = () => {
  return (
    <div className='w-full text-white h-screen bg-gradient-to-r from-cyan-500 to-blue-500 font-nunito'>
      <Header />
      <Search/>
      <Date/> 
      <TemperatureDetails/>
    </div>
  )
}

export default App
