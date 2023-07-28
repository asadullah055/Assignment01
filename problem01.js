function calculateDiscount(purchaseAmount) {
    let discount = 0;

    if (purchaseAmount >= 50 && purchaseAmount <= 100) {
        discount = 0.05;
    } else if (purchaseAmount > 100 && purchaseAmount <= 200) {
        discount = 0.1;
    } else if (purchaseAmount > 200) {
        discount = 0.15;
    };

    const discountAmount = purchaseAmount * discount;
    const discountedAmount = purchaseAmount - discountAmount;
    
    console.log('Total purchase amount: $ ' + purchaseAmount);
    console.log('Discounted amount: $ ' + discountedAmount);
    console.log('Discount amount: $ ' + discountAmount.toFixed(2));

}
calculateDiscount(150)
calculateDiscount(50)
calculateDiscount(201)