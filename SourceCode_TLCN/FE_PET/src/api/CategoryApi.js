import { messageShowErr, messageShowSuccess } from "../function";
import axiosClient from "./axiosClient";

class CategoryApi {
  getAll = (params) => {
    const url = "/categorys";
    return axiosClient.get(url, { params });
  };
  getOne = async (params) => {
    const url = `/categorys/${params}`;
    const data = await axiosClient.get(url);
    return data.data;
  };
  postcategory = async (params) => {
    const url = "/categorys";
    try {
      const data = await axiosClient.post(url, params);
      messageShowSuccess("Thêm mới thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
  deletecategory = async (id) => {
    const url = `/categorys/${id}`;
    try {
      const data = await axiosClient.delete(url);
      messageShowSuccess("Xoá thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
  editcategory = async (params) => {
    const url = `/categorys/${params.id}`;
    try {
      const data = await axiosClient.patch(url, params);
      messageShowSuccess("Sửa thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
}
const categoryApi = new CategoryApi();
export default categoryApi;
