# 💰 Tax Loss Harvesting Simulator (React)

A modern fintech-style web application that simulates **Tax Loss Harvesting** for crypto portfolios. Built using **React + Tailwind CSS**, this project allows users to select loss-making assets and visualize potential **tax savings in real-time**.

---

## 🚀 Features

* 📊 **Pre vs Post Harvesting Comparison**
* ✅ Select assets to simulate harvesting
* 💸 Real-time **tax savings calculation**
* 📉 Separate **Short-term & Long-term gains/losses**
* 🎯 Clean, responsive UI (KoinX-inspired)
* ⚡ Optimized using React hooks (`useMemo`, `useState`)

---

## 🧠 What is Tax Loss Harvesting?

Tax Loss Harvesting is a strategy where you:

* Sell assets at a **loss**
* Offset gains to **reduce taxable income**

This app simulates that process dynamically.

---

## 🏗️ Tech Stack

* ⚛️ React (Vite)
* 🎨 Tailwind CSS
* 🧠 JavaScript (ES6+)

---

## 📁 Project Structure

```
src/
 ├── components/
 │   ├── SummaryCard.jsx
 │   ├── HoldingsTable.jsx
 │   └── AssetRow.jsx
 ├── utils/
 │   └── taxCal.js
 ├── data.js
 ├── App.jsx
 └── main.jsx
```

---

## ⚙️ How It Works

1. **Load Portfolio Data**
2. **Select assets** with losses
3. System simulates selling those assets
4. Recalculates:

   * Short-term gains/losses
   * Long-term gains/losses
5. Displays **updated tax liability & savings**

---

## 📊 Tax Calculation Logic

* Short-term and long-term gains are calculated separately
* Total net capital gain:

```
Total Net = Short-term Net + Long-term Net
```

* Tax savings:

```
Savings = |Pre Harvest Net - Post Harvest Net| × Tax Rate
```

(Default tax rate: 30%)

---

## 🛠️ Installation & Setup

```bash
# Clone repo
git clone https://github.com/your-username/tax-loss-harvesting.git

# Navigate
cd tax-loss-harvesting

# Install dependencies
npm install

# Run project
npm run dev
```

---

## 📸 UI Highlights

* Clean fintech-style dashboard
* Responsive table with selectable assets
* Color-coded gains/losses (green/red)
* Dynamic tax savings display

---

## 🔥 Future Improvements

* 🌐 Live crypto prices (API integration)
* 📊 Charts (profit/loss visualization)
* 🧾 Real tax rules (STCG vs LTCG rates)
* 🔐 User portfolio import
* 📱 Mobile-first enhancements

---

## 🎯 Learning Outcomes

* Handling **derived state vs computed state**
* Efficient rendering using `useMemo`
* Building **real-world financial UI**
* Component-based architecture in React

---

## 👨‍💻 Author

**Devansh Bharat Lalwani**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and feel free to contribute!
