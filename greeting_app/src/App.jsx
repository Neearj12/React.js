import "./App.css";

function App() {
  let currdate=new Date()
  let value=currdate.getHours()
  let greeting=''
  const cssstyle={};
  if(value>=1 && value<12){
greeting='Good morning'
cssstyle.color='green'
  }
  else if(value>=12 && value<19){
    greeting='Good Afternoon'
    cssstyle.color='Orange'
  }
  else{
    greeting='Good night'
    cssstyle.color='blue'
  }

  return (
    <>
      <h1>hello sir <span style={cssstyle}> {greeting}</span></h1>
    </>
  );
}

export default App;
