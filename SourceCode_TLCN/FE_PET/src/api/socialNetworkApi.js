import { messageShowErr, messageShowSuccess } from "../function";
import axiosClient from "./axiosClient";

class SocialNetworkApi {
  getAll = (params) => {
    const url = "/socialNetworks";
    return axiosClient.get(url, { params });
  };
  getOne = async (params) => {
    const url = `/socialNetworks/${params}`;
    const data = await axiosClient.get(url);
    return data.data;
  };
  postsocialNetwork = async (params) => {
    const url = "/socialNetworks";
    try {
      const data = await axiosClient.post(url, params);
      messageShowSuccess("Thêm mới thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
  deletesocialNetwork = async (id) => {
    const url = `/socialNetworks/${id}`;
    try {
      const data = await axiosClient.delete(url);
      messageShowSuccess("Xoá thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
  editsocialNetwork = async (params) => {
    const url = `/socialNetworks/${params.id}`;
    try {
      const data = await axiosClient.patch(url, params);
      messageShowSuccess("Sửa thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
}
const socialNetworkApi = new SocialNetworkApi();
export default socialNetworkApi;
