import axiosClient from "./axiosClient";

class ImageProductApi {
  getAll = (params) => {
    const url = "/imageProducts";
    return axiosClient.get(url, { params });
  };
  getOne = async (params) => {
    const url = `/imageProducts/${params}`;
    const data = await axiosClient.get(url);
    return data.data;
  };
  postimageProduct = (params) => {
    const url = "/imageProducts";
    return axiosClient.post(url, params);
  };
  deleteimageProduct = (id) => {
    const url = `/imageProducts/${id}`;
    return axiosClient.delete(url);
  };
}
const imageProductApi = new ImageProductApi();
export default imageProductApi;
