import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const CardsContext = createContext(null)

export const useCardsContext = () => useContext(CardsContext)

export const CardsProvider = ({ children }) => {
  const [cardList, setCardList] = useState([])
  const sedans = cardList.find(item => item.type === 'sedans')
  const suvs = cardList.find(item => item.type === 'suvs')
  const luxury = cardList.find(item => item.type === 'luxury')

  async function fetchData() {
    const response = await axios('http://localhost:3004/cards')
    const cards = response.data
    
    setCardList(cards)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <CardsContext.Provider value={{ cardList, sedans, suvs, luxury }}>
      {children}
    </CardsContext.Provider>
  )
}
