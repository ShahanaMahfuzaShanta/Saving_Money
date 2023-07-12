document.getElementById('calculate-button').addEventListener('click', function(){
    const incomeInput = document.getElementById('input-income');
    const incomeInputText = incomeInput.value;
    const getIncomeValue = parseFloat(incomeInputText);

    const foodInput = document.getElementById('input-food');
    const foodInputText = foodInput.value;
    const getValue = parseFloat(foodInputText);

    const rentInput = document.getElementById('input-rent');
    const rentInputText = rentInput.value;
    const getValue2 = parseFloat(rentInputText);

    const clothesInput = document.getElementById('input-clothes');
    const clothesInputText = clothesInput.value;
    const getValue3 = parseFloat(clothesInputText);

    const inputTotal = document.getElementById('total-expenses');
    inputTotal.innerText = parseFloat(getValue + getValue2 + getValue3);
    const totalExpenses = inputTotal.innerText;

    const balanceAfterExpenses = document.getElementById('balance');
    balanceAfterExpenses.innerText = parseFloat(getIncomeValue - totalExpenses);
    
})

document.getElementById('save-button').addEventListener('click', function(){
    const incomeInput = document.getElementById('input-income');
    const incomeInputText = incomeInput.value;
    const getIncomeValue = parseFloat(incomeInputText);

    const saveInput = document.getElementById('input-save');
    const saveInputText = saveInput.value;
    const getsavingValue = parseFloat(saveInputText);


    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = parseFloat(getIncomeValue * (getsavingValue * 1/100));
    const saving = savingAmount.innerText;

    const newBalance = balanceAfterExpenses.innerText; 

    const remainingBalance = document.getElementById('remaining-amount');
    remainingBalance.innerText = parseFloat(newBalance - saving);



    // foodInput.value = '';
    // rentInput.value = '';
    // clothesInput.value = '';
})