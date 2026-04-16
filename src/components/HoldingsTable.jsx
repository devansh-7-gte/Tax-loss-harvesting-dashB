import React from 'react'
import AssetRow from './AssetRow'

function HoldingsTable({
  data,
  selectedIds,
  setSelectedIds
}) {
    const toggle = (id)=>{
        if(selectedIds.includes(id)){
            setSelectedIds(selectedIds.filter(sid => sid !== id))
        }else{
            setSelectedIds([...selectedIds, id])
        }
    }; 
  return (
    <div className='bg-[#121826] p-3 sm:p-4 rounded-lg sm:rounded-xl mt-4 sm:mt-6 overflow-x-auto'>
        <h2 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold">Holdings</h2>
<table className="w-full text-left text-xs sm:text-sm border-separate border-spacing-y-2 sm:border-spacing-y-3">        <thead>
          <tr className="text-gray-400 border-b text-xs sm:text-sm">
            <th className="p-2"></th>
            <th className="p-2">Asset</th>
            <th className="p-2 hidden sm:table-cell">Holdings</th>
            <th className="p-2 hidden md:table-cell">Short-term</th>
            <th className="p-2 hidden lg:table-cell">Long-term</th>
            <th className="p-2 hidden lg:table-cell">To Sell</th>
          </tr>
        </thead>
        <tbody className='py-10' >
          {data.map((asset) => (
            <AssetRow
              key={asset.id}
              asset={asset}
              selected={selectedIds.includes(asset.id)}
              toggle={toggle}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HoldingsTable
