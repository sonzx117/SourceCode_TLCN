import axiosClient from "./axiosClient";

class TagProductApi {
  getAll = (params) => {
    const url = "/tagProducts";
    return axiosClient.get(url, { params });
  };
  getOne = async (params) => {
    const url = `/tagProducts/${params}`;
    const data = await axiosClient.get(url);
    return data.data;
  };
  posttagProduct = (params) => {
    const url = "/tagProducts";
    return axiosClient.post(url, params);
  };
  deletetagProduct = (id) => {
    const url = `/tagProducts/${id}`;
    return axiosClient.delete(url);
  };
}
const tagProductApi = new TagProductApi();
export default tagProductApi;
