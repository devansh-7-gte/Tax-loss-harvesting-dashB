import React from 'react'

function AssetRow({asset, selected, toggle}) {
    const amountToSell = asset.shortTerm < 0 ? Math.abs(asset.shortTerm / asset.price).toFixed(4) : "-";
    const shortTermColor = asset.shortTerm >= 0 ? "text-green-400" : "text-red-400";
    const longTermColor = asset.longTerm >= 0 ? "text-green-400" : "text-red-400";
    
  return (
   <tr
  className={`${
    selected ? "bg-[#1a2a4a]" : "bg-[#0f1629]"
  } hover:bg-[#1a2235]`}
>
      <td className="p-2">
        <input type="checkbox" checked={selected} onChange={() => toggle(asset.id)} />
      </td>
      <td className="p-2 text-xs sm:text-sm">{asset.name} ({asset.symbol})</td>
      <td className="p-2 text-xs sm:text-sm hidden sm:table-cell">{asset.quantity}</td>
      <td className={`p-2 text-xs sm:text-sm hidden md:table-cell ${shortTermColor}`}>
        ${asset.shortTerm}
      </td>
      <td className={`p-2 text-xs sm:text-sm hidden lg:table-cell ${longTermColor}`}>
        ${asset.longTerm}
      </td>
      <td className="p-2 text-xs sm:text-sm hidden lg:table-cell">{amountToSell}</td>
    </tr>
  )
}

export default AssetRow
