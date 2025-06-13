import Usr from "./usr"
function App() {
  const username="Utkarsh Singh";
  return (//return only one element so we can wrap whole html using empty tag <></>---> called fragmentation 
    <>
      <Usr/>
      <h1>React With Vite | {username}</h1>
    </>
  )
}

export default App

//{a}=> a- evaluated expression
