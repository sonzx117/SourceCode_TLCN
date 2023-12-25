import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { url } from '../../../api/axiosClient';

import React from 'react';
import productApi from '../../../api/productApi';
import petApi from '../../../api/petApi';
import { resetCart } from '../../../app/Slice/CartSlide';
import { messageShowSuccess } from '../../../function';
import billApi from '../../../api/billApi';

const PayButton = ({ listCart }) => {
  const userInfor = useSelector((state) => state.user.userInfor);
  const dispatch = useDispatch();
  console.log('info user:', userInfor);
  const handleCheckout = () => {
    axios
      .post(`${url}/stripe/create-checkout-session`, {
        listCart,
        userId: userInfor.id,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
    handlePayment();
  };

  const handlePayment = () => {
    billApi
      .postbill({
        userName: userInfor.firstName + ' ' + userInfor.lastName,
        address: userInfor.address,
        phone: userInfor.phone,
        listProduct: JSON.stringify(listCart),
        price: userInfor.price,
      })
      .then((ok) => {
        //xử lý khi người dùng bấm đồng ý
        let quantityProduct = [];
        let quantityPet = [];
        listCart.forEach((el) => {
          if (!el.type) {
            quantityProduct.push({
              id: el.id,
              quantity: el.quantity - el.quantityCurrent,
              avatar: el.avatar,
            });
          } else {
            quantityPet.push({
              id: el.id,
              checkAdmin: el.checkAdmin,
              type: el.type,
              quantity: el.quantity - el.quantityCurrent,
            });
          }
        });
        if (quantityProduct.length !== 0) {
          productApi.updateQuantityProduct(quantityProduct);
        }
        if (quantityPet.length !== 0) {
          petApi.updateQuantityPet(quantityPet);
        }
      });
  };

  return (
    <div>
      <button
        onClick={() => {
          handleCheckout();
        }}
        style={{ marginLeft: '12px' }}
      >
        Thanh toán
      </button>
    </div>
  );
};

export default PayButton;
