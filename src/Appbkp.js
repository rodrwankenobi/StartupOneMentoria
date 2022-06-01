import { Routes,Route,BrowserRouter } from 'react-router-dom'

function Invoice() {
    return <h1>Teste</h1>
}

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route href="/about" element={<Invoice/>} />
            </Routes>
        </BrowserRouter>

    )
}

export default App;