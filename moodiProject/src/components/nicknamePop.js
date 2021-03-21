import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const NicknamePop = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [nick, setNick] = useState({
      nickname: '',
  })

  const nicknameInput = e => {
    setNick({
        ...nick,
        nickname: e.nativeEvent.text
    });
}
    const userMainpage = ({navigation}) => {
        navigation.navigate('Home')
    }
    const NickConfirmed = ({navigation}) => {
        
        userMainpage
    }
  return (
    
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("취소되었습니다.");
          setModalVisible(!modalVisible);
        }}
      >
        
          <View style={styles.modalView}>
            <Text style={styles.modalText}>닉네임을 입력하세요</Text>
            <Text style={styles.modalText}>(특수문자 사용 불가능)</Text>
            <TextInput 
                    placeholder="Your nickname"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: "#4a453f"
                    }]}
                    autoCapitalize="none"
                    value={nick.nickname}
                    onChange={nicknameInput} required
                />
            <Pressable
              style={[styles.buttonPop, styles.buttonClose]}
              onPress={NickConfirmed}
            >
              <Text style={styles.textStyle}>사용하기</Text>
            </Pressable>
          </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonPop: {
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#4a453f',
},
});

export default NicknamePop;