import { Pagination } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useRouteMatch } from 'react-router-dom';
import scheduleApi from '../../../api/ScheduleApi';
import { countPagination, formatDate } from '../../../function';
import Spinner from '../Spin/Spinner';
import Table from '../Table/Table';
import { CSVLink } from 'react-csv';
export default function Schedule() {
  const { url } = useRouteMatch();
  const titleTable = [
    { title: 'Người mua', name: 'name' },
    { title: 'Điện thoại', name: 'phone' },
    { title: 'Địa chỉ', name: 'address' },
    { title: 'Chi tiết', name: 'detail' },
    { title: 'Thời gian', name: 'time' },
  ];

  const [data, setdata] = useState(null);
  console.log('data', data);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    scheduleApi
      .getAll({ page: page })
      .then((ok) => {
        setdata(ok.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [load, page]);
  const history = useHistory();
  const handleClickDetail = (e) => {
    history.push(`${url}/ScheduleDetail/${e}`);
  };

  const csvHeaders = [
    { label: 'Người mua', key: 'name' },
    { label: 'Điện thoại', key: 'phone' },
    { label: 'Địa chỉ', key: 'address' },
    { label: 'Thời gian', key: 'time' },
  ];
  return (
    <div className="AdminTable">
      <div className="heading">
        <div className="heading__title">
          <h3>Đặt lịch dịch vụ</h3>
        </div>
        <div className="heading__hr"></div>
      </div>

      {data !== null ? (
        <div>
          <CSVLink
            style={{ position: 'absolute', top: '225px', right: '48px' }}
            data={data.rows.map((ok) => ({
              name: ok.name,
              phone: ok.phone,
              address: ok.address,
              time: formatDate(ok.date),
            }))}
            headers={csvHeaders}
            filename={'ChiTietDatLich_DichVuPet.csv'}
            className="export-button"
          >
            Export to CSV
          </CSVLink>

          <Table
            titleTable={titleTable}
            hidentDot
            dataSource={data.rows.map((ok, index) => ({
              key: ok.id,
              name: ok.name,
              phone: ok.phone,
              address: ok.address,
              detail: (
                <p style={{ cursor: 'pointer', color: 'orange' }} onClick={() => handleClickDetail(ok.id)}>
                  Chi tiết
                </p>
              ),
              time: formatDate(ok.date),
            }))}
          />
          <Pagination
            onChange={(e, i) => {
              setPage(i);
            }}
            count={countPagination(data.count)}
            color="secondary"
            variant="outlined"
            shape="rounded"
          />
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
