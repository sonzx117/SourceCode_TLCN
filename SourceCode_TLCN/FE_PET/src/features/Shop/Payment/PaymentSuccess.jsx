import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import Banner from '../../Banner/Banner';
import { useHistory } from 'react-router-dom';
import './style.scss';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { Stack } from '@mui/material';
import { useSelector } from 'react-redux';
const PaymentSuccess = () => {
  const history = useHistory();
  const userInfor = useSelector((state) => state.user.userInfor);
  console.log('user info:', userInfor);
  const handleContinueShopping = () => {
    // Redirect to http://localhost:13000/Shop
    history.push('/Shop');
  };
  return (
    <Box>
      <Banner />
      <Box className="card" sx={{ width: '50%', height: '550px', margin: '30px auto' }}>
        <Box sx={{ padding: '24px 42px' }}>
          <Stack direction="column" spacing="30px">
            {/* 1 */}
            <Box>
              <Stack direction="column" spacing="10px" justifyContent="center" alignItems="center">
                <Box>
                  <Typography variant="h4">Thanh toán thành công!</Typography>
                </Box>
                <Box>
                  <CheckCircleOutlinedIcon sx={{ fontSize: '60px', color: 'red' }} />
                </Box>
              </Stack>
            </Box>
            {/* 2 */}
            <Box textAlign="center">
              <Typography>Thanh toán đã thực hiện thành công. Trong vòng 30 phút ShopPet sẽ liên hệ xác nhận thông tin giao hàng cho quý khách</Typography>
            </Box>
            {/* 3 */}
            <Stack direction="row" spacing="32px" justifyContent="space-between" alignItems="center">
              <Box>
                <Stack direction="column" spacing="10px">
                  <Box>
                    <Typography>Hình thức thanh toán:</Typography>
                  </Box>
                  <Box>
                    <Typography>Tên khách hàng:</Typography>
                  </Box>
                  <Box>
                    <Typography>Địa chỉ nhận hàng:</Typography>
                  </Box>
                  <Box>
                    <Typography>Địa chỉ email:</Typography>
                  </Box>
                  <Box>
                    <Typography>Số điện thoại:</Typography>
                  </Box>
                </Stack>
              </Box>
              <Box>
                <Stack direction="column" spacing="10px">
                  <Box>
                    <Typography>Thanh toán chuyển khoản</Typography>
                  </Box>
                  <Box>
                    <Typography>{userInfor.firstName + ' ' + userInfor.lastName}</Typography>
                  </Box>
                  <Box>
                    <Typography>{userInfor.address}</Typography>
                  </Box>
                  <Box>
                    <Typography>{userInfor.email}</Typography>
                  </Box>
                  <Box>
                    <Typography>{userInfor.phone}</Typography>
                  </Box>
                </Stack>
              </Box>
            </Stack>
            {/* 4 */}
            <Box className="btn">
              <Button onClick={handleContinueShopping}>TIẾP TỤC MUA SẮM</Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentSuccess;
