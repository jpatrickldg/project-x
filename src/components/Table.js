const Table = (props) => {

  const toCurrency = (num) => num.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  const toCurrencyNoDecimal = (num) => num.toLocaleString("en-US", { maximumFractionDigits: 0 })
  const getDate = (date) => new Date(date).toLocaleDateString()
  const formatDateAndTime = (date) => new Date(date).toLocaleString()
  const removeNegativeSign = (num) => Math.abs(num).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  return (
    <div className="overflow-auto relative scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-600">
      <table className="table-fixed w-full text-sm text-left text-gray-200">
        <thead className="text-xs uppercase text-white border-b border-t border-gray-700">
          <tr className="text-right">
            <th className="text-left w-10 p-4 sticky left-0 top-0 bg-neutral-900 z-10">#</th>
            <th className="text-left p-4 w-36 md:w-48 lg:w-64 sticky left-10 top-0 bg-neutral-900 z-10">Coin</th>
            <th className="w-28 p-4 sticky top-0 bg-neutral-900">Price</th>
            <th className="w-20 p-4 sticky top-0 bg-neutral-900">24h</th>
            <th className="w-20 p-4 sticky top-0 bg-neutral-900">24h %</th>
            <th className="w-24 p-4 sticky top-0 bg-neutral-900">24h High</th>
            <th className="w-24 p-4 sticky top-0 bg-neutral-900">24h Low</th>
            <th className="w-28 p-4 sticky top-0 bg-neutral-900">ATH</th>
            <th className="w-24 p-4 sticky top-0 bg-neutral-900">ATH Date</th>
            <th className="w-20 p-4 sticky top-0 bg-neutral-900">ATH %</th>
            <th className="w-20 p-4 sticky top-0 bg-neutral-900">ATL</th>
            <th className="w-28 p-4 sticky top-0 bg-neutral-900">ATL Date</th>
            <th className="w-32 p-4 sticky top-0 bg-neutral-900">ATL %</th>
            <th className="w-36 p-4 sticky top-0 bg-neutral-900">Total Volume</th>
            <th className="w-40 p-4 sticky top-0 bg-neutral-900">Market Cap</th>
            <th className="w-40 p-4 sticky top-0 bg-neutral-900">Fully Diluted Val</th>
            <th className="w-40 p-4 sticky top-0 bg-neutral-900">Circulating Supply</th>
            <th className="w-40 p-4 sticky top-0 bg-neutral-900">Total Supply</th>
            <th className="w-40 p-4 sticky top-0 bg-neutral-900">Max Supply</th>
            <th className="w-28 p-4 py-1 sticky top-0 bg-neutral-900">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {props.coins.map(item => (
            <tr key={item.id} className="h-16 border-gray-700 hover:!bg-neutral-800 border-b text-right">
              <td className="text-left p-4 sticky left-0 bg-neutral-900">{item.market_cap_rank}</td>
              <td className="text-left px-4 py-1 sticky left-10 bg-neutral-900">
                <div className="flex gap-2 items-center">
                  <div className="flex-none">
                    <img src={item.image} className="w-6" />
                  </div>
                  <div className="flex-auto md:flex md:items-center md:gap-2">
                    <span className="block font-bold text-xs md:text-sm lg:whitespace-nowrap">{item.name}</span>
                    <span className="block uppercase text-xs font-bold">{item.symbol}</span>
                  </div>
                </div>
              </td>
              <td className="p-4">${toCurrency(item.current_price)}</td>
              <td className={`p-4 ${item.price_change_24h > 0 ? "text-green-600" : "text-red-600"}`}>${removeNegativeSign(item.price_change_24h)}</td>
              <td className={`p-4 ${item.price_change_percentage_24h > 0 ? "text-green-600" : "text-red-600"}`}>{removeNegativeSign(item.price_change_percentage_24h)}%</td>
              <td className="p-4">${toCurrency(item.high_24h)}</td>
              <td className="p-4">${toCurrency(item.low_24h)}</td>
              <td className="p-4">${toCurrency(item.ath)}</td>
              <td className="p-4">{getDate(item.ath_date)}</td>
              <td className={`p-4 ${item.ath_change_percentage > 0 ? "text-green-600" : "text-red-600"}`}>{removeNegativeSign(item.ath_change_percentage)}%</td>
              <td className="p-4">${toCurrency(item.atl)}</td>
              <td className="p-4">{getDate(item.atl_date)}</td>
              <td className={`p-4 ${item.atl_change_percentage > 0 ? "text-green-600" : "text-red-600"}`}>{removeNegativeSign(item.atl_change_percentage)}%</td>
              <td className="p-4">${item.total_volume.toLocaleString("en-US")}</td>
              <td className="p-4">${toCurrencyNoDecimal(item.market_cap)}</td>
              <td className="p-4">{item.fully_diluted_valuation ? `$${toCurrencyNoDecimal(item.fully_diluted_valuation)}` : '-'}</td>
              <td className="p-4 text-right">{toCurrencyNoDecimal(item.circulating_supply)}</td>
              <td className="p-4 text-right">{item.total_supply ? toCurrencyNoDecimal(item.total_supply) : '-'}</td>
              <td className="p-4 text-right">{item.max_supply ? toCurrencyNoDecimal(item.max_supply) : '-'}</td>
              <td className="p-4 py-1 text-right">{formatDateAndTime(item.last_updated)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table