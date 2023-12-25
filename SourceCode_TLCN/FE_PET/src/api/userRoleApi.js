import axiosClient from "./axiosClient";

class UserRoleApi {
  getAll = (params) => {
    const url = "/userRoles";
    return axiosClient.get(url, { params });
  };
  getOne = async (params) => {
    const url = `/userRoles/${params}`;
    const data = await axiosClient.get(url);
    return data.data;
  };
  post = (params) => {
    const url = "/userRoles";
    return axiosClient.post(url, params);
  };
  delete = (id) => {
    const url = `/userRoles/${id}`;
    return axiosClient.delete(url);
  };
  edit = (params) => {
    const url = `/userRoles/${params.id}`;
    return axiosClient.patch(url, params);
  };
}
const userRoleApi = new UserRoleApi();
export default userRoleApi;
