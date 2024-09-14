import React, { useState } from 'react'
import './Modal.css'

export const Modal = () => {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div className='modal-container'>
      <button
        onClick={toggleModal}
        className='btn-modal'>
        Open
      </button>

      {modal && (
        <div className="modal" onClick={toggleModal}>
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Xin chào Modal</h2>
            <p>
              Modal là một cửa sổ popup xuất hiện trên trang web, thường có kích thước nhỏ so với trang chính, để cung cấp thông tin cụ thể, yêu cầu hành động hoặc thu hút sự chú ý đặc biệt từ người dùng
            </p>
            <button
              className='close-modal'
              onClick={toggleModal}>
              &times;
            </button>
          </div>
        </div>
      )}

    </div>

  )
}
