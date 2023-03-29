import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./components/GlobalStyle"
import Login from "./components/Login.js"

export default function App() {
  /* const tokenOnLocalStorage = localStorage.getItem("token")
  const [token, setToken] = useState(tokenOnLocalStorage)

  function setAndPersistToken(token) {
    setToken(token)
    localStorage.setItem("token", token)
  } */

  return (

    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        {/*<Route path="/cadastro" element={} />
          <Route path="/home" element={} />
          <Route path="/nova-entrada" element={} />
          <Route path="/nova-saida" element={<NewOutput />} /> */}
      </Routes>
    </BrowserRouter>
  )
}