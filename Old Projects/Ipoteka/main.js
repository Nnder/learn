const totalCost = document.getElementById('total-cost'),
      anInitialfee = document.getElementById('an-initial-fee'),
      creditTerm = document.getElementById('credit-term');

const totalCostRange = document.getElementById('total-cost-range'),
      anInitialfeeRange = document.getElementById('an-initial-fee-range'),
      creditTermRange = document.getElementById('credit-term-range');

const totalAmountOfCredit = document.getElementById('amount-of-credit'),
      totalMonthlyPayment = document.getElementById('monthly-payments'),
      totalRecommendedIncome = document.getElementById('recommend-income');

const inputsRange = document.querySelectorAll('.input-range');

const bankBtns = document.querySelectorAll('.bank');


const assignValue = () => {
    totalCost.value = totalCostRange.value;
    anInitialfee.value = anInitialfeeRange.value;
    creditTerm.value = creditTermRange.value;
}
assignValue();

const banks = [
    {
        name: 'alfa',
        percents: 8.7
    },
    {
        name: 'sberbank',
        percents: 8.4
    },
    {
        name: 'pochta',
        percents: 8
    },
    {
        name: 'tinkoff',
        percents: 8.1
    }
];

let currentPercents = banks[0].percents;

for(let bank of bankBtns){
    bank.addEventListener('click', () => {
        for (let item of bankBtns){
            item.classList.remove('active');
        }
        bank.classList.add('active');
        takeActiveBank(bank);
    })
}

const takeActiveBank = currentActive => {
    const dataAttrValue = currentActive.dataset.name;
    const currentBank = banks.find( bank => bank.name === dataAttrValue)
    currentPercents = currentBank.percents;
    calculation(totalCost.value, anInitialfee.value, creditTerm.value);
};

for(let input of inputsRange){
    input.addEventListener('input', () => {
        assignValue();
        calculation(totalCost.value, anInitialfee.value, creditTerm.value);
    })
}

const calculation = (totalCost = 0, anInitialfee = 100000, creditTerm = 1) => {
    // formula
    // еп = ежемесячный платеж
    // рк = размер кредита
    // пс = процентная ставка
    // км = количество месяцев
    //
    // еп = ( рк + (((рк / 100) * пс) / 12 )* км) / км

    let monthlyPayment; // еп
    let lounAmount = totalCost - anInitialfee; // рк
    let interstRate = currentPercents; // пс
    let numberOfYears = creditTerm; // кол-вл лет
    let numberOfMonths = 12 * numberOfYears; // км

    monthlyPayment = (lounAmount + (((lounAmount / 100) * interstRate) / 12)* numberOfMonths) / numberOfMonths;
    const monthlyPaymentArounded = Math.round(monthlyPayment);
    if (monthlyPaymentArounded < 0){
        return false;
    } else {
        totalAmountOfCredit.innerHTML = `${lounAmount} руб`;
        totalMonthlyPayment.innerHTML = `${monthlyPaymentArounded} руб`;
        totalRecommendedIncome.innerHTML = `${monthlyPaymentArounded + ((monthlyPaymentArounded / 100) * 35)} руб`;
    }
}


