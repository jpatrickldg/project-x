import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = (props) => {

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(props.totalCoins / props.coinsPerPage); i++) {
    pageNumbers.push(i)
  }

  const nextPage = () => props.setCurrentPage(prevState => prevState + 1)
  const prevPage = () => props.setCurrentPage(prevState => prevState - 1)

  return (
    <nav className="text-gray-200 font-semibold">
      <ul className="flex items-center">
        <li>
          <button
            onClick={prevPage}
            disabled={props.currentPage === pageNumbers[0] ? true : false}
            className={`text-center w-8 h-7 mr-1 rounded-md hover:bg-neutral-600 ${props.currentPage === pageNumbers[0] && "hover:bg-transparent text-gray-500"}`}>
            <FaChevronLeft className='mx-auto' />
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
        <li className='w-8 py-1 text-sm bg-blue-600 rounded-md text-center md:hidden'>{props.currentPage}</li>
        <li>
          <button
            onClick={nextPage}
            disabled={props.currentPage === pageNumbers[pageNumbers.length - 1] ? true : false}
            className={`w-8 h-7 ml-1 rounded-md hover:bg-neutral-600 ${props.currentPage === pageNumbers[pageNumbers.length - 1] && "hover:bg-transparent text-gray-500"}`}>
            <FaChevronRight className='mx-auto' />
          </button>
        </li>
      </ul>
    </nav >
  )
}

export default Pagination