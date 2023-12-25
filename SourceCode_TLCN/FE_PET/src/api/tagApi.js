import { messageShowErr, messageShowSuccess } from "../function";
import axiosClient from "./axiosClient";

class TagApi {
  getAll = (params) => {
    const url = "/tags";
    return axiosClient.get(url, { params });
  };
  getOne = async (params) => {
    const url = `/tags/${params}`;
    const data = await axiosClient.get(url);
    return data.data;
  };
  posttag = async (params) => {
    const url = "/tags";
    try {
      const data = await axiosClient.post(url, params);
      messageShowSuccess("Thêm mới thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
  deletetag = async (id) => {
    const url = `/tags/${id}`;
    try {
      const data = await axiosClient.delete(url);
      messageShowSuccess("Xoá thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
  edittag = async (params) => {
    const url = `/tags/${params.id}`;
    try {
      const data = await axiosClient.patch(url, params);
      messageShowSuccess("Sửa thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
}
const tagApi = new TagApi();
export default tagApi;
