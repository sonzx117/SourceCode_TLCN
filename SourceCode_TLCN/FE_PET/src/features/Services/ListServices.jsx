import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../../sass/ListNews/ListNews.scss';
import Banner from '../Banner/Banner';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import serviceApi from '../../api/ServiceApi';
import imgDog from '../../images/cat3.jpg';
import renderHTML from 'react-render-html';
export default function ListServices() {
  const listBread = [{ name: 'Trang chủ', link: '/' }, { name: 'Dịch vụ' }];
  const style = {
    background: `url(${imgDog}) center no-repeat`,
    backgroundSize: 'cover',
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    serviceApi.getServiceHome({ limit: 6 }).then((ok) => {
      setData(ok.data);
    });
  }, []);

  return (
    <div className="ListNews">
      <Banner />
      <Breadcrumbs breadCrumbList={listBread} />
      <Container>
        <div className="heading-detail">
          <div className="heading-detail__title" style={{ textAlign: 'center' }}>
            <h3>Dịch vụ</h3>
          </div>
          <div className="heading-detail__hr" style={{ margin: '0 auto' }}></div>
        </div>
        <div className="Services" style={style}>
          <div className="blur"></div>
          <div className="heading">
            <div className="heading__title text-white">
              <h3>Dịch vụ của chúng tôi</h3>
            </div>
            <div className="heading__hr"></div>
          </div>
          <div className="container">
            <div className="post-grid">
              {data?.map((ok, index) => (
                <div className="post-item" key={index}>
                  <div className="icon">{renderHTML(ok.icon)}</div>
                  <div className="title">{ok.name}</div>
                  <div className="description">{ok.description}</div>
                  <div className="btn">
                    <Link to={`/RegisterService/${ok.id}`}>Đăng ký ngay</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
