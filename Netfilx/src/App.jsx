
import './App.css'
import Card from './Componetns/Card'
import Sdata from './Componetns/Sdata'


 
function App() {

  return (
    <>
    <h1 className='heading_style'>List of top 5 Netflix in 2020</h1>
 
 {Sdata.map((val)=>{
    return(
      <Card
      key={val.id}
      imgsrc={val.imgsrc} 
     tittle={val.tittle}
      sname={val.sname} 
      link={val.links}
    />
      )
    }
 )
  }
    </>
  )
}

export default App
