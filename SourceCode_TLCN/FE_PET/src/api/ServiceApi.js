import { messageShowErr, messageShowSuccess } from "../function";
import axiosClient from "./axiosClient";

class ServiceApi {
  getAll = (params) => {
    const url = "/services";
    return axiosClient.get(url, { params });
  };
  getServiceHome = (params) => {
    const url = "/services/getServiceHome";
    return axiosClient.get(url, { params });
  };
  getOne = async (params) => {
    const url = `/services/${params}`;
    const data = await axiosClient.get(url);
    return data.data;
  };
  postService = async (params) => {
    const url = "/services";
    try {
      const data = await axiosClient.post(url, params);
      messageShowSuccess("Thêm mới thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
  deleteService = async (id) => {
    const url = `/services/${id}`;
    try {
      const data = await axiosClient.delete(url);
      messageShowSuccess("Xoá thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
  editService = async (params) => {
    const url = `/services/${params.id}`;
    try {
      const data = await axiosClient.patch(url, params);
      messageShowSuccess("Sửa thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
}
const serviceApi = new ServiceApi();
export default serviceApi;
