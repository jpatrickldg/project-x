import { useEffect, useReducer, useState } from 'react';
import './App.css';
import Table from './components/Table';
import Coin from './components/Coin'
import Pagination from './components/Pagination'
import Header from './components/Header';

function App() {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [coinsPerPage] = useState(10)

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true)

      const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      const response = await fetch(url)
      const data = await response.json()
      setCoins(data)
      setLoading(false)
    }
    fetchCoins()
  }, [])

  const indexOfLastCoin = currentPage * coinsPerPage
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage
  const currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // const nextPage = () => {
  //   if (currentPage !== coins.length / coinsPerPage) setCurrentPage(prevState => prevState + 1)
  // }
  const nextPage = () => setCurrentPage(prevState => prevState + 1)
  const prevPage = () => setCurrentPage(prevState => prevState - 1)

  return (
    <div className="p-4 lg:px-10 bg-black min-h-screen">
      <Header />
      <main>
        <Table coins={currentCoins} loading={loading} totalCoins={coins.length} coinsPerPage={coinsPerPage} paginate={paginate} currentPage={currentPage} nextPage={nextPage} prevPage={prevPage} />
        <Coin coins={currentCoins} loading={loading} />
        {!loading && <Pagination totalCoins={coins.length} coinsPerPage={coinsPerPage} paginate={paginate} currentPage={currentPage} nextPage={nextPage} prevPage={prevPage} />}
      </main>
    </div>
  );
}

export default App;
