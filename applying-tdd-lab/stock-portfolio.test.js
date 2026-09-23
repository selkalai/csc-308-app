const StockPortfolio = require("./stock-portfolio");

//2.1:
test("creates a stock portfolio", () => {
  const portfolio = new StockPortfolio();
  expect(portfolio).toBeInstanceOf(StockPortfolio);
});

//2.2:
test("answers whether a new portfolio is empty", () => {
  const portfolio = new StockPortfolio();
  expect(portfolio.isEmpty()).toBe(true);
});

//2.3:

test("purchaseing: make sure its not empty after purchasing", () => {
  const portfolio = new StockPortfolio();
  portfolio.purchase("X", 5);
  expect(portfolio.isEmpty()).toBe(false);
});

//2.4:
test("selling: make sure it subtracts shares when a stock is sold", () => {
  const portfolio = new StockPortfolio();
  portfolio.purchase("X", 100);
  portfolio.sell("X", 15);
  expect(portfolio.sharesBySymbol.get("X")).toBe(85);
});

//2.5:
test("counts unique ticker symbols", () => {
  const portfolio = new StockPortfolio();
  portfolio.purchase("GME", 5);
  portfolio.purchase("RBLX", 10);
  portfolio.purchase("GME", 17);
  expect(portfolio.uniqueSymCount()).toBe(2);
});

//2.6:
test("make sure that if a symbol has zero shares it is deleted from portfolio", () => {
	const portfolio = new StockPortfolio();
	portfolio.purchase("RBLX", 10);
	portfolio.sell("RBLX", 10);
	expect(portfolio.uniqueSymCount()).toBe(0);
});

//2.7:
test("answers how many shares owned given asymbol", () => {
	const portfolio = new StockPortfolio();
	portfolio.purchase("GME", 5);
	expect(portfolio.numShares("GME")).toBe(5);
	expect(portfolio.numShares("Z")).toBe(0);
});

//2.8:

test("throws an error w/specified msg when selling more shares than owned", () => {
	const portfolio = new StockPortfolio();
	portfolio.purchase("GME", 27);
	expect(() => {
		portfolio.sell("GME", 28);
	}).toThrow("Not possible to sell this number of shares.");
});