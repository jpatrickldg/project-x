const Pagination = (props) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(props.totalCoins / props.coinsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className="mt-4 flex items-center justify-center">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <button
            onClick={props.prevPage}
            disabled={props.currentPage === pageNumbers[0] ? true : false}
            className={props.currentPage === 1 ? "flex items-center px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg dark:bg-black dark:border-gray-700 dark:text-gray-400" : "flex items-center px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-black dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-white"}>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            <span>Prev</span>
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className="hidden md:block">
            <button
              onClick={() => { props.paginate(number) }}
              className={props.currentPage === number ? "px-3 py-2 leading-tight border border-gray-300bg-gray-100 text-gray-700 dark:border-gray-700 dark:bg-neutral-800 dark:text-white" : "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-black dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
            >{number}</button>
          </li>
        ))}
        <li>
          <button
            onClick={props.nextPage}
            disabled={props.currentPage === pageNumbers[pageNumbers.length - 1] ? true : false}
            className={props.currentPage === pageNumbers[pageNumbers.length - 1] ? "flex items-center px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg dark:bg-black dark:border-gray-700 dark:text-gray-400" : "flex items-center px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-black dark:border-gray-700 dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-white"}>
            <span>Next</span>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </button>
        </li>
      </ul>
    </nav >
  )
}

export default Pagination