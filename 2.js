function bankSaving(n) {
    var money = 1;
    var moneyPerMondayIterate = 0;
    var total = 0;
    for (var i = 1; i <= n; i++) {
        total += money;

        if (i % 7 == 0) {
            money = moneyPerMondayIterate + 1;
            moneyPerMondayIterate = money;
        }
        money++
        console.log(money)
    }
    return total;
}

console.log(bankSaving(4)); 