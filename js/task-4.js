function getShippingCost(country, price) {

  switch (country) {
    case "China":
      return `Shipping to ${country} will cost ${price} credits`;
      break;
    case "Chile":
      return `Shipping to ${country} will cost ${price} credits`;
      break;
    case "Australia":
      return `Shipping to ${country} will cost ${price} credits`;
      break; 
    case "Jamaica":
      return `Shipping to ${country} will cost ${price} credits`;
      break; 
    default:
      return "Sorry, there is no delivery to your country";
  }
  }

console.log(getShippingCost("Australia", 170)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China", 100)); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile", 250)); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica", 120)); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"