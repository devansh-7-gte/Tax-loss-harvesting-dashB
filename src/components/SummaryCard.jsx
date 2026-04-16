import React from 'react'

function SummaryCard({ title, data, highlight, savings }) {
  return (
    <div
      className={`p-3 sm:p-6 rounded-lg sm:rounded-xl ${
        highlight
          ? "bg-gradient-to-r from-blue-600 to-blue-400"
          : "bg-[#121826]"
      }`}
    >
      <h2 className="text-lg sm:text-2xl mb-4 sm:mb-6 font-semibold">{title}</h2>

      {/* Table Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-sm sm:text-lg">

        {/* Empty top-left */}
        <div></div>

        {/* Headers */}
        <div className="text-center font-medium hidden sm:block">Short-term</div>
        <div className="text-center font-medium hidden sm:block">Long-term</div>

        {/* Profits */}
        <div className="flex justify-between sm:block"><span>Profits</span><span className="sm:hidden font-medium">({data.shortTerm.profit.toFixed(0)} / {data.longTerm.profit.toFixed(0)})</span></div>
        <div className="text-center text-green-300 hidden sm:block">
          $ {data.shortTerm.profit.toFixed(0)}
        </div>
        <div className="text-center text-green-300 hidden sm:block">
          $ {data.longTerm.profit.toFixed(0)}
        </div>

        {/* Losses */}
        <div className="flex justify-between sm:block"><span>Losses</span><span className="sm:hidden font-medium">({Math.abs(data.shortTerm.loss).toFixed(0)} / {Math.abs(data.longTerm.loss).toFixed(0)})</span></div>
        <div className="text-center text-red-200 hidden sm:block">
          - $ {Math.abs(data.shortTerm.loss).toFixed(0)}
        </div>
        <div className="text-center text-red-200 hidden sm:block">
          - $ {Math.abs(data.longTerm.loss).toFixed(0)}
        </div>

        {/* Net Capital Gains */}
        <div className="flex justify-between sm:block font-medium"><span>Net Capital Gains</span><span className="sm:hidden font-medium">({data.shortTerm.net.toFixed(0)} / {data.longTerm.net.toFixed(0)})</span></div>
        <div className="text-center hidden sm:block">
          {data.shortTerm.net >= 0 ? "$" : "- $"} {Math.abs(data.shortTerm.net).toFixed(0)}
        </div>
        <div className="text-center hidden sm:block">
          {data.longTerm.net >= 0 ? "$" : "- $"} {Math.abs(data.longTerm.net).toFixed(0)}
        </div>
      </div>

      {/* Divider */}
      <div className="mt-4 sm:mt-6 border-t border-white/30 pt-3 sm:pt-4">

        {/* Effective Capital Gains */}
        <div className="flex justify-between text-base sm:text-xl font-semibold">
          <span>Effective Capital Gains:</span>
          <span>
            {data.totalNet >= 0 ? "$" : "- $"} {Math.abs(data.totalNet).toFixed(0)}
          </span>
        </div>

        {/* Savings */}
       {savings !== undefined && savings !== null && (
  <p className="mt-4 text-green-100">
    🎉 You are going to save upto $ {savings.toFixed(0)}
  </p>
)}  
      </div>
    </div>
  );
}

export default SummaryCard;