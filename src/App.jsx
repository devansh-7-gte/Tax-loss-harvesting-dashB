import { useState, useMemo } from "react";
import { portfolio } from "./data";
import SummaryCard from "./components/SummaryCard";
import HoldingsTable from "./components/HoldingsTable";
import {
  calculateSummary,
  simulateHarvest
} from "./utils/taxCal";

export default function App() {
  const [selectedIds, setSelectedIds] = useState([]);

  // Pre-harvest summary
  const preSummary = useMemo(() => {
    return calculateSummary(portfolio);
  }, []);

  // Simulated harvesting
  const harvestedData = useMemo(() => {
    return simulateHarvest(portfolio, selectedIds);
  }, [selectedIds]);

  // Post-harvest summary
  const postSummary = useMemo(() => {
    return calculateSummary(harvestedData);
  }, [harvestedData]);

  // Tax saving
  const TAX_RATE = 0.3;

 const savings = useMemo(() => {
  return Math.abs(preSummary.totalNet - postSummary.totalNet) * TAX_RATE;
}, [preSummary, postSummary]);

 return (
  <div className="bg-[#0B0F19] min-h-screen text-white">

    {/* Topbar */}
    <div className="w-full bg-[#151b2b] border-b border-gray-800 px-3 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
      <div className="text-lg sm:text-xl font-bold">KoinX</div>
      <div className="text-xs sm:text-sm text-gray-400">Dashboard</div>
    </div>

    {/* Page Content */}
    <div className="p-3 sm:p-6">

      <nav className="mb-4 sm:mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Tax Loss Harvesting</h1>
        <a className="text-blue-600 text-sm sm:text-base" href="">How it works?</a>
      </nav>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <SummaryCard title="Pre Harvesting" data={preSummary} />

        <SummaryCard
          title="After Harvesting"
          data={postSummary}
          highlight
          savings={savings}
        />
      </div>

      {/* Table */}
      <HoldingsTable
        data={portfolio}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
      />

    </div>
  </div>
);
}