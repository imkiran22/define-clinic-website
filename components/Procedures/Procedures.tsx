import Card from "antd/lib/card/Card";
import { Button, Modal, List, Typography } from "antd";
import React, { useState } from "react";
import { PROCEDURES_LIST, TREATMENTS_LOOKUP } from "../../constants/procedures";
import Styles from "./Procedures.module.scss";
import Image from "next/image";
import { CheckSquareFilled } from "@ant-design/icons";

type TREATMENT_TYPE = keyof typeof TREATMENTS_LOOKUP;

const Procedures: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal = (content: { [key: string]: any }) => {
    setIsModalOpen(true);
    setModalContent(content);
  };

  return (
    <div className={Styles.wrapper}>
      <h3 className={Styles.title}>Our Services</h3>
      <ModalHelper {...{ handleCancel, isModalOpen, modalContent }} />
      <div className={Styles.procedure}>
        {PROCEDURES_LIST.map((proc) => (
          <Card className={Styles.card} key={proc.key}>
            <Image
              alt={proc.key}
              className={Styles.img}
              src={proc.img}
              width={"100%"}
              height={"75%"}
              layout="responsive"
            />
            <div className="section">
              <div className={Styles.subTitle}>{proc.label}</div>
              <div className={Styles.content}>{proc.content}</div>
              <div className={Styles.knowMore}>
                <Button
                  size="large"
                  type="primary"
                  onClick={() => showModal(proc)}
                >
                  Know More
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const ModalHelper: React.FC<{
  modalContent: { [key: string]: any };
  isModalOpen: boolean;
  handleCancel: () => void;
}> = ({ modalContent, isModalOpen, handleCancel }) => {
  const key = modalContent.key as TREATMENT_TYPE;
  const treatments = (TREATMENTS_LOOKUP[key] || []).map((t) => t.label);
  return (
    <Modal
      title={modalContent.label}
      visible={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      className={"procedure-modal"}
    >
      <List
        header={null}
        footer={null}
        bordered
        dataSource={treatments}
        className={Styles.list}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark></Typography.Text>{" "}
            <>
              <CheckSquareFilled className={Styles.checkMe} />
              {item}
            </>
          </List.Item>
        )}
      />
    </Modal>
  );
};

export default Procedures;
