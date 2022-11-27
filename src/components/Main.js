import Table from './Table'

const Main = (props) => {
  return (
    <main className="flex-auto">
      <Table
        coins={props.coins}
        totalCoins={props.totalCoins}
        coinsPerPage={props.coinsPerPage}
        currentPage={props.currentPage}
        setCoinsPerPage={props.setCoinsPerPage}
        setCurrentPage={props.setCurrentPage}
      />
    </main>
  )
}

export default Main