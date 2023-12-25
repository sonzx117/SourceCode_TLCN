import React, { useEffect, useState } from 'react';
import adminPanel from '../../../images/admin_panel.png';
import './doanhthu.css';

export default function Statistical() {
  return (
    <div>
      <div className="heading">
        <div className="heading__title">
          <h3>Quản trị hệ thống</h3>
        </div>
        <div className="heading__hr"></div>
      </div>
      <div>
        <img loading="lazy" src={adminPanel} alt="admin" />
      </div>
    </div>
  );
}
