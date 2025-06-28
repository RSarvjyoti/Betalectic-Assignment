exports.calculate = async (cart) => {
  let items = [];
  let total = 0;
  let totalDiscount = 0;

  for (let item of cart.items) {
    // NO populate here — it’s already populated
    const product = item.product;
    if (!product) continue; // safety

    let price = product.price;
    let subtotal = price * item.quantity;
    let discount = 0;

    // Apply your discount rules here
    if (product.code === 'A' && item.quantity >= 3) {
      const setsOfThree = Math.floor(item.quantity / 3);
      const remainder = item.quantity % 3;
      subtotal = (setsOfThree * 85) + (remainder * price);
      discount = (item.quantity * price) - subtotal;
    }

    if (product.code === 'B' && item.quantity >= 2) {
      const setsOfTwo = Math.floor(item.quantity / 2);
      const remainder = item.quantity % 2;
      subtotal = (setsOfTwo * 35) + (remainder * price);
      discount = (item.quantity * price) - subtotal;
    }

    total += subtotal;
    totalDiscount += discount;

    items.push({
      product,
      quantity: item.quantity,
      price,
      subtotal,
      discount
    });
  }

  // Basket-level discount
  let basketDiscount = 0;
  if (total > 150) {
    basketDiscount = 20;
    total -= 20;
  }
  totalDiscount += basketDiscount;

  return {
    items,
    total,
    totalDiscount
  };
};