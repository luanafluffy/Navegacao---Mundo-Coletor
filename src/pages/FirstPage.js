import * as React from 'react';
import { Button, View, Text } from 'react-native';

import Separator from '/home/lua/v2_mundo_coletor/src/components/Separator'

const FirstPage = ({ navigation }) => {
    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
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
                    Esta é a tela inicial e da opção "Primeira tela".
                </Text>
                <Button
                    color='#000'
                    onPress={() => navigation.navigate('SecondPage')}
                    title='Ir para a "Segunda tela"'
                />
                <Separator />
                <Button
                    color='#000'
                    onPress={() => navigation.navigate('ThirdPage')}
                    title='Ir para a "Terceira tela"'
                />
            </View>
            <Text style={{ fontSize: 18, textAlign: 'center' }}>
                React Navigation Drawer Customizado
            </Text>
            <Text style={{ fontSize: 16, textAlign: 'center', color: '#000' }}>
                luanacarvalho.com.br
            </Text>
        </View>
    );
};

export default FirstPage;