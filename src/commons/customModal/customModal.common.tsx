import React, {ReactNode, useCallback, useState} from 'react';
import {Modal, Pressable, View} from 'react-native';

import {styles} from './customModal.style';

interface CustomModalProps {
  displayElement?: ReactNode;
  children: (options: {onCloseModalHandler: () => void}) => ReactNode;
}

const CustomModal = ({children, displayElement}: CustomModalProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onCloseModalHandler = useCallback(() => {
    setModalVisible(false);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => {
            setModalVisible(true);
          }}>
          {displayElement}
        </Pressable>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {children({onCloseModalHandler})}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export {CustomModal};
