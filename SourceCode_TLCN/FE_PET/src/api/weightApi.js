import { messageShowErr, messageShowSuccess } from "../function";
import axiosClient from "./axiosClient";

class WeightApi {
  getAll = (params) => {
    const url = "/weights";
    return axiosClient.get(url, { params });
  };
  getOne = async (params) => {
    const url = `/weights/${params}`;
    const data = await axiosClient.get(url);
    return data.data;
  };
  postWeight = async (params) => {
    const url = "/weights";
    try {
      const data = await axiosClient.post(url, params);
      messageShowSuccess("Thêm mới thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
  deleteWeight = async (id) => {
    const url = `/weights/${id}`;
    try {
      const data = await axiosClient.delete(url);
      messageShowSuccess("Xoá thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
  editWeight = async (params) => {
    const url = `/weights/${params.id}`;
    try {
      const data = await axiosClient.patch(url, params);
      messageShowSuccess("Sửa thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
}
const weightApi = new WeightApi();
export default weightApi;
