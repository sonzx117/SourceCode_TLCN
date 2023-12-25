import { Grid, Tooltip } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import renderHTML from 'react-render-html';
import { useParams } from 'react-router';
import petApi from '../../../api/petApi';
import { messageShowErr, messageShowSuccess } from '../../../function';
import '../../../sass/InforUser/MyPet.scss';
import { petCheckNull, petCheckPending, petCheckSuccess } from '../../Admin/svg/IconSvg';
import { Link } from 'react-router-dom';
import PetInfoDialog from './PetInfoDialog';
export default function MyPet() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);
  const [petInfo, setPetInfo] = useState(null); // To store the selected pet's information
  const [isDialogOpen, setIsDialogOpen] = useState(false); // To control the dialog visibility

  useEffect(() => {
    petApi.getPetUser(id).then((ok) => {
      setData(ok.rows);
    });
  }, [load]);
  const renderCheckAdmin = (e) => {
    if (e === 0) {
      return <Tooltip title="Chưa bật kiểm duyệt">{petCheckNull}</Tooltip>;
    } else if (e === 1) {
      return <Tooltip title="Chưa kiểm duyệt">{petCheckPending}</Tooltip>;
    } else {
      return <Tooltip title="Đã kiểm duyệt">{petCheckSuccess}</Tooltip>;
    }
  };
  const hangdleOnclick = (status, checkAdmin, id) => {
    if (status === 1) {
      setData(null);
      petApi
        .editpet({
          status: 0,
          id: id,
        })
        .then((data) => {
          messageShowSuccess('Ẩn thành công!');
        })
        .catch((err) => {
          messageShowErr('Có lỗi xảy ra!');
        });
    } else {
      if (checkAdmin === 0) {
        setData(null);
        petApi
          .editpet({ checkAdmin: 1, id, id })
          .then((data) => {
            messageShowSuccess('Đã gửi yêu cầu duyệt tới admin!');
          })
          .catch((err) => {
            messageShowErr('Có lỗi xảy ra!');
          });
      } else if (checkAdmin === 1) {
        messageShowSuccess('Đang trong quá trình đợi duyệt!');
      } else {
        setData(null);
        petApi
          .editpet({
            status: 1,
            id: id,
          })
          .then((data) => {
            messageShowSuccess('Thú cưng đã có trong cửa hàng!');
          })
          .catch((err) => {
            messageShowErr('Có lỗi xảy ra!');
          });
      }
    }
    setTimeout(() => {
      setLoad(!load);
    }, 500);
  };

  // Function to open the dialog and set the selected pet's information
  const openPetInfoDialog = (pet) => {
    setPetInfo(pet);
    setIsDialogOpen(true);
  };

  const handleDeletePet = (id) => {
    if (window.confirm('Are you sure you want to delete this pet?')) {
      petApi
        .deletepet(id)
        .then(() => {
          // Handle success (you may want to update your UI or re-fetch data)
          //   messageShowSuccess('Pet deleted successfully!');
        })
        .catch((error) => {
          // Handle the error (show an error message)
          console.error('Error deleting pet:', error);
          messageShowErr('Error deleting pet. Please try again.');
        });
    }
  };

  return (
    <div className="tab-pane">
      <Grid container spacing={4}>
        {data?.map((ok, index) => (
          <Grid item lg={6} md={6} sm={6} xs={12} key={index}>
            <div className="myPet">
              <div className="avatar" style={{ cursor: 'pointer' }} onClick={() => openPetInfoDialog(ok)}>
                <img loading="lazy" src={ok.avatar} alt="" />
              </div>
              <div className="text">
                <div className="text_name" style={{ cursor: 'pointer' }} onClick={() => openPetInfoDialog(ok)}>
                  Tên thú cưng: {ok.name}
                </div>
                <div className="text_price">Đơn giá: {parseInt(ok.price).toLocaleString()} vnđ</div>

                <div className="detail" style={{ marginTop: '5px' }}>
                  Chi tiết ...
                  <div className="detail-content">
                    <div className="description">
                      <div className="detail-content-title">Mô tả</div>
                      {ok.description}
                    </div>
                    <div className="text-detail">
                      <div className="detail-content-title">Điểm nổi bật</div>
                      {renderHTML(ok.text)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="checkadmin">{renderCheckAdmin(ok.checkAdmin)}</div>
              <p className="btn-delete" onClick={() => handleDeletePet(ok.id)}>
                Xoá
              </p>

              {ok.status === 1 ? (
                <p className="btn-no" onClick={() => hangdleOnclick(1, ok.checkAdmin, ok.id)}>
                  Không bán
                </p>
              ) : (
                <p className="btn-yes" onClick={() => hangdleOnclick(0, ok.checkAdmin, ok.id)}>
                  Đăng bán
                </p>
              )}
            </div>
          </Grid>
        ))}
      </Grid>
      {isDialogOpen && <PetInfoDialog petInfo={petInfo} onClose={() => setIsDialogOpen(false)} />}
    </div>
  );
}
