const Table = (props) => {
  const imgStyle = {
    height: "30px"
  }

  const addZeroes = (num) => {

    const dec = num.toString().split('.')[1]
    const len = dec && dec.length > 2 ? dec.length : 2
    return Number(num).toFixed(len)
  }

  if (props.loading) {
    return (
      <h2>Loading....</h2>
    )
  }

  return (
    <div className="overflow-x-auto relative shadow-md scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-neutral-600">
      <table className="table-fixed w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 border-b border-t">
          <tr>
            <th className="w-12 px-4 py-3 sticky left-0 bg-black">#</th>
            <th className="px-2 py-3 w-36 lg:w-44 sticky left-12 bg-black">Coin</th>
            <th className="w-28 px-2 py-3">Price</th>
            <th className="w-20 px-2 py-3">24h Chg</th>
            <th className="w-20 px-2 py-3">24h Chg%</th>
            <th className="w-24 px-2 py-3">24 High</th>
            <th className="w-24 px-2 py-3">24 Low</th>
            <th className="w-32 px-2 py-3">Market Cap</th>
            <th className="w-24 px-2 py-3">ATH</th>
            <th className="w-20 px-2 py-3">ATH Chg%</th>
            <th className="w-20 px-2 py-3">ATL</th>
            <th className="w-24 px-2 py-3">ATL Chg%</th>
            <th className="w-28 px-2 py-3">Total Volume</th>
            <th className="w-36 px-2 py-3">Circulating Supply</th>
          </tr>
        </thead>
        <tbody>
          {props.coins.map(item => (
            <tr key={item.id} className="h-16 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-900 border-b">
              <td className="w-16 px-4 py-4 sticky left-0 bg-black">{item.market_cap_rank}</td>
              <td className="w-40 px-2 py-1 sticky left-12 bg-black">
                <div className="flex gap-2 items-center">
                  <div className="flex-none">
                    <img src={item.image} className="w-6" />
                  </div>
                  <div className="flex-auto md:flex md:items-center md:gap-2">
                    <span className="block font-semibold">{item.name}</span>
                    <span className="block uppercase text-xs">{item.symbol}</span>
                  </div>
                </div>
              </td>
              <td className="px-2 py-4">${item.current_price.toLocaleString("en-US")}</td>
              <td className={item.price_change_24h > 0 ? "px-2 py-4 text-green-600" : "px-2 py-4 text-red-600"}>${item.price_change_24h.toFixed(2).toLocaleString("en-US")}</td>
              <td className={item.price_change_percentage_24h > 0 ? "w-fit px-2 py-4 text-green-600" : "w-fit px-2 py-4 text-red-600"}>{item.price_change_percentage_24h.toFixed(2)}%</td>
              <td className="px-2 py-4">${item.high_24h.toLocaleString("en-US")}</td>
              <td className="px-2 py-4">${item.low_24h.toFixed(2).toLocaleString("en-US")}</td>
              <td className="px-2 py-4">${item.market_cap.toLocaleString("en-US")}</td>
              <td className="px-2 py-4">${item.ath.toFixed(2).toLocaleString("en-US")}</td>
              <td className={item.ath_change_percentage > 0 ? "w-fit px-2 py-4 text-green-600" : "w-fit px-2 py-4 text-red-600"}>{item.ath_change_percentage.toFixed(2)}%</td>
              <td className="px-2 py-4">${item.atl.toLocaleString("en-US")}</td>
              <td className={item.atl_change_percentage > 0 ? "w-fit px-2 py-4 text-green-600" : "w-fit px-2 py-4 text-red-600"}>{item.atl_change_percentage.toFixed(2)}%</td>
              <td className="px-2 py-4">${item.total_volume.toLocaleString("en-US")}</td>
              <td className="px-2 py-4">{item.circulating_supply.toLocaleString("en-US")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table