import { messageShowErr, messageShowSuccess } from '../function';
import axiosClient from './axiosClient';
class UserApi {
  getAll = (params) => {
    const url = '/users';
    return axiosClient.get(url, { params });
  };
  checkUser = (params) => {
    const url = `/users/checkUser`;
    if (localStorage.getItem('tokenPet')) {
      return axiosClient.get(url).then((data) => {
        return data.data.user;
      });
    } else {
      return [];
    }
  };
  getOne = async (params) => {
    const url = `/users/${params}`;
    const data = await axiosClient.get(url);
    return data.data;
  };
  postuser = (params) => {
    const url = '/users';
    return axiosClient.post(url, params);
  };
  deleteuser = async (id) => {
    const url = `/users/${id}`;
    try {
      const data = await axiosClient.delete(url);
      messageShowSuccess('Xoá thành công!');
    } catch (err) {
      messageShowErr('Có lỗi xảy ra!');
    }
  };
  edituser = async (params) => {
    const url = `/users/${params.id}`;
    try {
      const data = await axiosClient.patch(url, params);
      messageShowSuccess('Sửa thông tin thành công!');
    } catch (err) {
      messageShowErr('Có lỗi xảy ra!');
    }
  };
}
const userApi = new UserApi();
export default userApi;
