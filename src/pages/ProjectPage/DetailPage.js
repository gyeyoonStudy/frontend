import React, { useState } from "react";
import ProjetItem from "../../components/Layout/ProjetItem";
import Modal from "../../components/Modal/Modal";
import SignUpBox from "../../components/Layout/SignUpBox";
import { BlackButton } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";

function DetailPage() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <ProjetItem
        process={"50%"}
        color={"tomato"}
        projectName={"Project Boated1"}
        projectTask={"Task"}
        Dday={"2022-01-01 11:11"}
        onClick={openModal}
      ></ProjetItem>
      {modalVisible && (
        <Modal
          visible={modalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}
        >
          <Input />
        </Modal>
      )}
    </>
  );
}

export default DetailPage;
