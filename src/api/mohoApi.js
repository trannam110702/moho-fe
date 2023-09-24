import axiosClient from "./axiosClient";
const productApi = {
  getAllProduct: () => {
    return axiosClient.get("/product/getall");
  },
  getProductById: (id) => {
    return axiosClient.get("/product/" + id);
  },
};
const cartApi = {
  addToCart: (productId, quantity) => {
    return axiosClient.post("/cart/add", {
      productId,
      quantity,
    });
  },
  getAll: () => {
    return axiosClient.get("/cart/getall");
  },
};
export { productApi, cartApi };
