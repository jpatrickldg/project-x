const Pagination = (props) => {

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(props.totalCoins / props.coinsPerPage); i++) {
    pageNumbers.push(i)
  }

  const nextPage = () => props.setCurrentPage(prevState => prevState + 1)
  const prevPage = () => props.setCurrentPage(prevState => prevState - 1)

  return (
    <nav className="text-gray-200 font-semibold">
      <ul className="inline-flex items-center">
        <li>
          <button
            onClick={prevPage}
            disabled={props.currentPage === pageNumbers[0] ? true : false}
            className={`p-1 mr-2 rounded-md hover:bg-neutral-600 ${props.currentPage === pageNumbers[0] && "hover:bg-transparent text-gray-500"}`}>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className="hidden md:block">
            <button
              onClick={() => { props.paginate(number) }}
              className={`w-8 text-sm py-1 mx-[2px] hover:bg-neutral-600 rounded-md ${props.currentPage === number && "bg-blue-600 hover:bg-blue-600 text-white"}`}
            >{number}</button>
          </li>
        ))}
        <li>
          <button
            onClick={nextPage}
            disabled={props.currentPage === pageNumbers[pageNumbers.length - 1] ? true : false}
            className={`p-1 ml-1 rounded-md hover:bg-neutral-600 ${props.currentPage === pageNumbers[pageNumbers.length - 1] && "hover:bg-transparent text-gray-500"}`}>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </button>
        </li>
      </ul>
    </nav >
  )
}

export default Pagination