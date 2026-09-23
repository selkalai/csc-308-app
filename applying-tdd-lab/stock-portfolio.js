class StockPortfolio {

	constructor() { //constructor for 2.1
		this.sharesBySymbol = new Map();
	}

	isEmpty() { // isEmpty method for 2.2
		return this.sharesBySymbol.size === 0;
	}

	purchase(symbol, shares) { // purchase method for 2.3
		const currentShares = this.sharesBySymbol.get(symbol) || 0;
		this.sharesBySymbol.set(symbol, currentShares + shares);
	}
        
    sell(symbol, shares) { //sell method for 2.4
        const currentShares = this.sharesBySymbol.get(symbol) || 0;

        //throw an error if they try to sell more shares than they own for 2.8
        if (shares > currentShares) {
            throw new Error("Not possible to sell this number of shares.");
        }
        
        const remainingShares = currentShares - shares;

        //make sure if a sym has 0 shares it is deleted for 2.6
        if (remainingShares === 0) {
            this.sharesBySymbol.delete(symbol);
        } else {
            this.sharesBySymbol.set(symbol, remainingShares);
        }
    }

	uniqueSymCount() { //unique count of symbols method for 2.5
		return this.sharesBySymbol.size;
	}

    numShares(symbol) { //number of shares given a symbol method fro 2.7
        return this.sharesBySymbol.get(symbol) || 0;
    }
}

module.exports = StockPortfolio;


//Reflection on TDD: