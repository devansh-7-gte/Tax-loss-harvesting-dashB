// Calculate total profits, losses, and net
// Calculate detailed summary (short-term + long-term separately)
export function calculateSummary(data) {
  let shortTermProfit = 0;
  let shortTermLoss = 0;

  let longTermProfit = 0;
  let longTermLoss = 0;

  data.forEach(asset => {
    // Short-term
    if (asset.shortTerm >= 0) {
      shortTermProfit += asset.shortTerm;
    } else {
      shortTermLoss += asset.shortTerm;
    }

    // Long-term
    if (asset.longTerm >= 0) {
      longTermProfit += asset.longTerm;
    } else {
      longTermLoss += asset.longTerm;
    }
  });

  const netShort = shortTermProfit + shortTermLoss;
  const netLong = longTermProfit + longTermLoss;

  const totalNet = netShort + netLong;

  return {
    shortTerm: {
      profit: shortTermProfit,
      loss: shortTermLoss,
      net: netShort
    },
    longTerm: {
      profit: longTermProfit,
      loss: longTermLoss,
      net: netLong
    },
    totalNet
  };
}
// Simulate harvesting (selected assets → realize losses)
export function simulateHarvest(data, selectedIds) {
  return data.map(asset => {
    if (selectedIds.includes(asset.id)) {
      return {
        ...asset,
        shortTerm: asset.shortTerm < 0 ? asset.shortTerm * 2 : asset.shortTerm,
        longTerm: asset.longTerm < 0 ? asset.longTerm * 2 : asset.longTerm
      };
    }
    return asset;
  });
}