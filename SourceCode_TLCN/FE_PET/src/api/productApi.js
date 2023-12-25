import { messageShowErr, messageShowSuccess } from "../function";
import axiosClient from "./axiosClient";

class ProductApi {
  getAll = (params) => {
    const url = "/products";
    return axiosClient.get(url, { params });
  };
  getOne = async (params) => {
    const url = `/products/${params}`;
    const data = await axiosClient.get(url);
    return data.data;
  };
  postproduct = async (params) => {
    const url = "/products";
    try {
      const data = await axiosClient.post(url, params);
      messageShowSuccess("Thêm mới thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
  deleteproduct = async (id) => {
    const url = `/products/${id}`;
    try {
      const data = await axiosClient.delete(url);
      messageShowSuccess("Xoá thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
  editproduct = async (params) => {
    const url = `/products/${params.id}`;
    try {
      const data = await axiosClient.patch(url, params);
      messageShowSuccess("Sửa thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
  updateQuantityProduct = async (params) => {
    const url = `/products/quantity`;
    try {
      const data = await axiosClient.patch(url, params);
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
}
const productApi = new ProductApi();
export default productApi;
