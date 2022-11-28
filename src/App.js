import { useEffect, useState } from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [coinsPerPage, setCoinsPerPage] = useState(10)
  const [error, setError] = useState("")

  useEffect(() => {
    setLoading(true)
    const fetchCoins = async () => {
      const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      const response = await fetch(url)
      const data = await response.json()

      if (response.ok) {
        setCoins(data)
      } else {
        setError(data.error)
      }
      setLoading(false)
    }
    fetchCoins()
  }, [])

  const indexOfLastCoin = currentPage * coinsPerPage
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage
  const currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin)

  if (loading) {
    return (
      <div className='h-screen w-full flex items-center justify-center bg-neutral-900'>
        <div className='border-8 border-gray-500 border-t-8 border-t-gray-800 rounded-[50%] h-32 w-32 overflow-hidden animate-spin'></div>
      </div>
    )
  }

  if (error) {
    return (
      <ErrorMessage error={error} />
    )
  }

  return (
    <div className="px-4 md:px-10 lg:px-60 bg-neutral-900 min-h-screen flex flex-col">
      <Header />
      <Main
        coins={currentCoins}
        loading={loading}
        totalCoins={coins.length}
        coinsPerPage={coinsPerPage}
        currentPage={currentPage}
        setCoinsPerPage={setCoinsPerPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </div>
  );
}

export default App;