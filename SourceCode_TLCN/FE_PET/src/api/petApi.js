import { messageShowErr, messageShowSuccess } from "../function";
import axiosClient from "./axiosClient";

class PetApi {
  getAll = (params) => {
    const url = "/pets";
    return axiosClient.get(url, { params });
  };
  countTypePet = () => {
    const url = "/pets/countTypePet";
    return axiosClient.get(url);
  };
  getShop = (params) => {
    const url = "/shops";
    return axiosClient.get(url, { params });
  };
  getOne = async (params) => {
    const url = `/pets/${params}`;
    const data = await axiosClient.get(url);
    return data.data;
  };
  getCheckAdmin = async (params) => {
    const url = `/pets/checkPet`;
    const data = await axiosClient.get(url, { params });
    return data.data;
  };
  getPetUser = async (params) => {
    const url = `/pets/getPetUser/${params}`;
    const data = await axiosClient.get(url);
    return data.data;
  };
  postpet = async (params) => {
    console.log("PetApi ~ params", params);
    const url = "/pets";
    try {
      const data = await axiosClient.post(url, params);
      messageShowSuccess("Tạo mới thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
  updateQuantityPet = async (params) => {
    const url = `/pets/update/quantity`;
    try {
      const data = await axiosClient.patch(url, params);
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
  deletepet = async (id) => {
    const url = `/pets/${id}`;
    try {
      const data = await axiosClient.delete(url);
      messageShowSuccess("Xoá thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
  editpet = (params) => {
    const url = `/pets/${params.id}`;
    return axiosClient.patch(url, params);
  };
}
const petApi = new PetApi();
export default petApi;
