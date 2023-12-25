import { messageShowErr, messageShowSuccess } from "../function";
import axiosClient from "./axiosClient";

class GalleryApi {
  getAll = (params) => {
    const url = "/galleries";
    return axiosClient.get(url, { params });
  };
  getGalleryHome = (params) => {
    const url = "/galleries/getGalleryHome";
    return axiosClient.get(url, { params });
  };
  getOne = async (params) => {
    const url = `/galleries/${params}`;
    const data = await axiosClient.get(url);
    return data.data;
  };
  postGallery = async (params) => {
    const url = "/galleries";
    try {
      const data = await axiosClient.post(url, params);
      messageShowSuccess("Thêm mới thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
  deleteGallery = async (id) => {
    const url = `/galleries/${id}`;
    try {
      const data = await axiosClient.delete(url);
      messageShowSuccess("Xoá thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
  editGallery = async (params) => {
    const url = `/galleries/${params.id}`;
    try {
      const data = await axiosClient.patch(url, params);
      messageShowSuccess("Sửa thành công!");
    } catch (err) {
      messageShowErr("Có lỗi xảy ra!");
    }
  };
}
const galleryApi = new GalleryApi();
export default galleryApi;
