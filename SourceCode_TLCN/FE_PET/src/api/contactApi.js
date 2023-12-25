import { messageShowErr, messageShowSuccess } from "../function";
import axiosClient from "./axiosClient";

class ContactApi {
  getAll = (params) => {
    const url = "/contacts";
    return axiosClient.get(url, { params });
  };
  getOne = async (params) => {
    const url = `/contacts/${params}`;
    const data = await axiosClient.get(url);
    return data.data;
  };
  postcontact = async (params) => {
    const url = "/contacts";
    try {
      const data = await axiosClient.post(url, params);
      messageShowSuccess("Thêm mới thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
  deletecontact = async (id) => {
    const url = `/contacts/${id}`;
    try {
      const data = await axiosClient.delete(url);
      messageShowSuccess("Xoá thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
  editcontact = async (params) => {
    const url = `/contacts/${params.id}`;
    try {
      const data = await axiosClient.patch(url, params);
      messageShowSuccess("Sửa thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
}
const contactApi = new ContactApi();
export default contactApi;
