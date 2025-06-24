import { useState ,useEffect} from 'react'
import Card from './component/Card'
import ThemeBtn from './component/themebtn'
import { ThemeProvider } from './context/theme'

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const lightTheme = () => {
    setThemeMode('light');
  };

  const darkTheme = () => {
    setThemeMode('dark');
  };

  useEffect(() => {
 document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
    }, [themeMode]);

  return (
    <ThemeProvider value={{themeMode, lightTheme,darkTheme}}>
      <h1 className="text-black p-4 text-3xl text-center font-bold bg-slate-200">USR_JSR</h1>
    <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn/>
            </div>
               
            <div className="w-full max-w-sm mx-auto">
              <Card/>
            </div>
        </div>
    </div>

    </ThemeProvider>
  )
}

export default App
