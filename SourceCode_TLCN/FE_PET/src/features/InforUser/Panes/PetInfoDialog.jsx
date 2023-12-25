import React from 'react';
import { Dialog, DialogTitle, DialogContent, Button } from '@material-ui/core';

import JoditEditor from 'jodit-react';
export default function PetInfoDialog({ petInfo, onClose }) {
  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Thông tin thú cưng</DialogTitle>
      <DialogContent>
        {petInfo && (
          <div>
            <div className="input-admin">
              <label htmlFor="">Ảnh đại diện</label>
              <div className="avatar">
                <img loading="lazy" src={petInfo.avatar} alt={petInfo.name} style={{ maxWidth: '100%', maxHeight: '400px' }} />
              </div>
            </div>
            <div className="input-admin">
              <label htmlFor="">Tiêu đề</label>
              <div>{petInfo.name}</div>
            </div>
            <div className="input-admin">
              <label htmlFor="">Giá</label>
              <div>₫{Number(petInfo.price).toLocaleString()}</div>
            </div>
            <div className="input-admin">
              <label htmlFor="">Số lượng</label>
              <div>{petInfo.quantity}</div>
            </div>
            <div className="input-admin">
              <label htmlFor="">Mô tả</label>
              <div>{petInfo.description}</div>
            </div>
            <div className="input-admin">
              <label htmlFor="">Loại thú cưng</label>
              <div>{petInfo.type}</div>
            </div>
            <div className="input-admin">
              <label htmlFor="">Điểm nổi bật</label>
              <JoditEditor
                value={petInfo.text}
                tabIndex={1}
                config={{
                  readonly: true,
                }}
              />
            </div>
          </div>
        )}
        <Button variant="contained" color="primary" onClick={onClose}>
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
}
