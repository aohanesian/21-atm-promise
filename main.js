const userData = {
    USD: 1000,
    EUR: 900,
    UAH: 15000,
    BIF: 20000,
    AOA: 100
};

const bankData = {
    USD: {
        max: 3000,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000,
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
};

let getMoney = new Promise(
    function (resolve, reject) {
        resolve()
    }
);

getMoney
    .then(function () {
        let seeBalance = confirm(`Подивитися баланс карті?`);
        return seeBalance ? Promise.resolve() : Promise.reject();
    })
    .then(function () {
        let currency;
        do {
            currency = prompt(`Choose currency to show: ${Object.keys(userData).join(`, `)}`).toUpperCase().trim();
        } while (!userData[currency]);
        console.log(`Баланс становить: ${userData[currency]} ${currency}.`);
    })
    .catch(function () {
        let currency;
        let allCurrencies = [...new Set(Object.keys(bankData).concat(Object.keys(userData)))]
        do {
            currency = prompt(`All currencies in home work : ${allCurrencies.join(`, `)}`).toUpperCase().trim();
        } while (!Object.keys(bankData).includes(currency));
        let amount = +prompt(`Enter amount to withdraw`);
        if (amount > userData[currency] || amount > bankData[currency].max) {
            return console.log(`Введена сума більша за доступну. Максимальна сума зняття: ${amount > userData[currency] ? userData[currency] : bankData[currency].max} ${currency}.`)
        } else if (amount < bankData[currency].min) {
            return console.log(`Введена сума менша за доступну. Мінімальна сума зняття: ${bankData[currency].min} ${currency}.`)
        } else console.log(`От Ваші гроші ${amount} ${currency} ${bankData[currency].img}.`);
    }).finally(function () {
    console.log(`Дякую, гарного дня 😊`);
})