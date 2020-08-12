// D = (L-S) / L * 100

var sellingPrice = 199;
var listingPrice = 799;

var discountPrice = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log("Discount Percentage is:" + discountPrice);

// To avoid many boolean points

displayDiscountPercentage = Math.round(discountPrice);

console.log(displayDiscountPercentage);