import { messageShowErr, messageShowSuccess } from "../function";
import axiosClient from "./axiosClient";

class BillApi {
  getAll = (params) => {
    const url = "/bills";
    return axiosClient.get(url, { params });
  };
  getOne = async (params) => {
    const url = `/bills/${params}`;
    const data = await axiosClient.get(url);
    return data.data;
  };
  postbill = async (params) => {
    const url = "/bills";
    try {
      const data = await axiosClient.post(url, params);
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
  deletebill = async (id) => {
    const url = `/bills/${id}`;
    try {
      const data = await axiosClient.delete(url);
      messageShowSuccess("Xoá thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
  editbill = async (params) => {
    const url = `/bills/${params.id}`;
    try {
      const data = await axiosClient.patch(url, params);
      messageShowSuccess("Sửa thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
}
const billApi = new BillApi();
export default billApi;
