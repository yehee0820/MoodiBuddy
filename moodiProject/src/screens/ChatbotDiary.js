import React, { useState, useCallback, useEffect }from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'

const {height, width} = Dimensions.get("window")

function ChatbotDiary() {
    
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: '안녕! 오늘 하루도 잘 보냈네. 기분이 어때?',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: '버디버디',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        // console.log('previousMessages: ',previousMessages)
        console.log('messages: ', messages)
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
        <View style={{ flex: 1}}>
        <View style={{alignItems: 'center', justifyContent: 'center',position:'absolute',width:width, top:50,zIndex:10 }}>
            <Text style={{ marginTop:10, fontSize: 30, fontWeight: "900", fontFamily: 'OdAmumal' }}>Record of the day</Text>
        </View>
        <GiftedChat 
            placeholder={'메세지를 입력하세요...'}
            alwaysShowSend={true}
            messages={messages}
            textInputProps={{ keyboardAppearance: 'dark', autoCorrect: false }}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
        />
        </View>
        
  )
}

export default ChatbotDiary;