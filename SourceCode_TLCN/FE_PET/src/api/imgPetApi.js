import { messageShowErr, messageShowSuccess } from "../function";
import axiosClient from "./axiosClient";

class ImgPetApi {
  getAll = (params) => {
    const url = "/imgPets";
    return axiosClient.get(url, { params });
  };
  getOne = async (params) => {
    const url = `/imgPets/${params}`;
    const data = await axiosClient.get(url);
    return data.data;
  };
  postimgPet = async (params) => {
    const url = "/imgPets";
    try {
      const data = await axiosClient.post(url, params);
      messageShowSuccess("Thêm mới thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
  deleteimgPet = async (id) => {
    const url = `/imgPets/${id}`;
    try {
      const data = await axiosClient.delete(url);
      messageShowSuccess("Xoá thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
  editimgPet = async (params) => {
    const url = `/imgPets/${params.id}`;
    try {
      const data = await axiosClient.patch(url, params);
      messageShowSuccess("Sửa thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
}
const imgPetApi = new ImgPetApi();
export default imgPetApi;
