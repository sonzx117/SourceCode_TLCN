import { messageShowErr, messageShowSuccess } from "../function";
import axiosClient from "./axiosClient";

class NewApi {
  getAll = (params) => {
    const url = "/news";
    return axiosClient.get(url, { params });
  };
  getNewHome = (params) => {
    const url = "/news/newHome";
    return axiosClient.get(url, { params });
  };
  getOne = async (params) => {
    const url = `/news/${params}`;
    const data = await axiosClient.get(url);
    return data.data;
  };
  getOtherNews = async (params) => {
    const url = `/news/otherNews/${params}`;
    const data = await axiosClient.get(url);
    return data.data;
  };
  postnew = async (params) => {
    const url = "/news";
    try {
      const data = await axiosClient.post(url, params);
      messageShowSuccess("Thêm mới thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
  deletenew = async (id) => {
    const url = `/news/${id}`;
    try {
      const data = await axiosClient.delete(url);
      messageShowSuccess("Xoá thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
  editnew = async (params) => {
    const url = `/news/${params.id}`;
    try {
      const data = await axiosClient.patch(url, params);
      messageShowSuccess("Sửa thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
}
const newApi = new NewApi();
export default newApi;
