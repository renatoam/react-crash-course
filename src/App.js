import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Auth from "./pages/auth/Auth"

export default function App() {
  const [cardList, setCardList] = useState([])

  async function fetchData() {
    const response = await axios('http://localhost:3004/cards')
    const cards = response.data
    
    setCardList(cards)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!cardList.length) return "No cards available."

  return <Auth />
}
