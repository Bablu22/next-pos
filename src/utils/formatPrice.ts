const formatPrice = (amount: number) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BDT",
  }).format(amount);
};

export default formatPrice;
