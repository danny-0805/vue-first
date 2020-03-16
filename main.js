var app = new Vue({
  el: "#app",
  data: {
    brand: "Vue Mastery",
    product: "Socks",
    image: "./assets/vmSocks-green.png",
    inStock: true,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantColor: "green",
        variantId: 2234,
        variantImage: "./assets/vmSocks-green.png"
      },
      {
        variantColor: "blue",
        variantId: 2235,
        variantImage: "./assets/vmSocks-blue.png"
      }
    ],
    cart: 0
  },
  methods: {
    addToCart: function() {
      this.cart += 1;
    },
    updateProduct: function(variantImage) {
      this.image = variantImage;
    }
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    }
  }
});
