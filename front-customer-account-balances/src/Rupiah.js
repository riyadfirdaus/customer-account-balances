let rupiah = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "IDR",
});

const toRupiah = (val) => {
  return rupiah.format(val);
};

export default toRupiah;
