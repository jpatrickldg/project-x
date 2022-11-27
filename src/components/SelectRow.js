const SelectRow = (props) => {

  const handleChange = (event) => {
    props.setCoinsPerPage(Number(event.target.value))
    props.setCurrentPage(1)
  }

  return (
    <div>
      <label htmlFor="page" className="text-sm font-medium text-gray-900 dark:text-white">Rows</label>
      <select id="pages" onChange={handleChange} value={props.coinsPerPage} className="ml-2 text-sm rounded-md p-1 px-1.5 bg-neutral-600 border-gray-700 text-white outline-none">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  )
}

export default SelectRow