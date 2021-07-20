import * as React from 'react';
import { Button, View, Text } from 'react-native';

import Separator from '/home/lua/v2_mundo_coletor/src/components/Separator'

const ThirdPage = ({ navigation }) => {
    return (
        <View style={{ flex: 1, padding: 16, backgroundColor:'#fff'}}>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Text
                    style={{
                        fontSize: 25,
                        textAlign: 'center',
                        marginBottom: 16,
                    }}>
                    Esta é a "Terceira Tela" a partir da segunda
                </Text>
                <Button
                    color='#000'
                    title='Ir para a "Primeira Tela'
                    onPress={() => navigation.navigate('FirstPage')}
                />
                <Separator />
                <Button
                    color='#000'
                    title='Ir para a "Segunda Tela"'
                    onPress={() => navigation.navigate('SecondPage')}
                />
            </View>
            <Text style={{ fontSize: 18, textAlign: 'center', color: '#fff' }}>
                React Navigation Drawer Customizado
            </Text>
            <Text style={{ fontSize: 16, textAlign: 'center', color: '#fff' }}>
                luanacarvalho.com.br
            </Text>
        </View>
    );
};

export default ThirdPage;





