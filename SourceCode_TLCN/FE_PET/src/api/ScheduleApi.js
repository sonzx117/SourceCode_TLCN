import { messageShowErr, messageShowSuccess } from '../function';
import axiosClient from './axiosClient';

class ScheduleApi {
  getAll = (params) => {
    const url = '/schedules';
    return axiosClient.get(url, { params });
  };
  getOne = async (params) => {
    const url = `/schedules/${params}`;
    const data = await axiosClient.get(url);
    return data.data;
  };
  postschedule = async (params) => {
    const url = '/schedules';
    try {
      const data = await axiosClient.post(url, params);
      messageShowSuccess('Đặt lịch thành công');
    } catch (err) {
      messageShowErr('Có lỗi xảy ra!');
    }
  };
  deleteschedule = async (id) => {
    const url = `/schedules/${id}`;
    try {
      const data = await axiosClient.delete(url);
      messageShowSuccess('Xoá thành công!');
    } catch (err) {
      messageShowErr('Có lỗi xảy ra!');
    }
  };
  editschedule = async (params) => {
    const url = `/schedules/${params.id}`;
    try {
      const data = await axiosClient.patch(url, params);
      messageShowSuccess('Sửa thành công!');
    } catch (err) {
      messageShowErr('Có lỗi xảy ra!');
    }
  };
}
const scheduleApi = new ScheduleApi();
export default scheduleApi;
