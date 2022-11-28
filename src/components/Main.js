import Table from './Table'
import SelectRow from './SelectRow'
import Pagination from './Pagination'

const Main = (props) => {
  const paginate = (pageNumber) => props.setCurrentPage(pageNumber)

  return (
    <main className="flex-auto py-2">
      <div className="flex items-center justify-between py-2">
        <h2 className="text-white font-semibold">Cryptocurrencies</h2>
        <SelectRow
          coinsPerPage={props.coinsPerPage}
          setCoinsPerPage={props.setCoinsPerPage}
          setCurrentPage={props.setCurrentPage}
        />
      </div>
      <Table
        coins={props.coins}
        totalCoins={props.totalCoins}
        coinsPerPage={props.coinsPerPage}
        currentPage={props.currentPage}
        setCoinsPerPage={props.setCoinsPerPage}
        setCurrentPage={props.setCurrentPage}
      />
      <div className="mt-4 flex items-center justify-between">
        <Pagination
          totalCoins={props.totalCoins}
          coinsPerPage={props.coinsPerPage}
          setCoinsPerPage={props.setCoinsPerPage}
          paginate={paginate}
          currentPage={props.currentPage}
          setCurrentPage={props.setCurrentPage}
        />
        <SelectRow
          coinsPerPage={props.coinsPerPage}
          setCoinsPerPage={props.setCoinsPerPage}
          setCurrentPage={props.setCurrentPage}
        />
      </div>
    </main>
  )
}

export default Main