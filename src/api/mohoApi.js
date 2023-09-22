import axiosClient from "./axiosClient";
const productApi = {
  getAllProduct: () => {
    return axiosClient.get("product/getall");
  },
  getProductById: (id) => {
    return axiosClient.get("product/" + id);
  },
};
export { productApi };
