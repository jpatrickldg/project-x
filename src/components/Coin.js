const Coin = props => {
  return (
    <div className="hidden text-white">
      {props.coins.map(item => (
        <div key={item.id} className="p-5 border bg-gray-700 mb-2 flex items-center gap-4 rounded-md">
          <img src={item.image} className="w-16" />
          <div>
            <h2><span>{item.market_cap_rank}</span>. {item.name}</h2>
            <h1 className="uppercase text-3xl">{item.symbol}</h1>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Coin