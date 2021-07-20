import * as React from 'react';
import { Button, View, Text } from 'react-native';

import Separator from '/home/lua/v2_mundo_coletor/src/components/Separator';

const SecondPage = ({ navigation }) => {
    return (
      <View style={{ flex: 1, padding: 14, backgroundColor:'#fff'}}>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Text
                    stylsve={{
                        fontSize: 20,
                        textAlign: 'center',
                        marginBottom: 16,
                    }}>
                    Esta é a "Segunda Tela", sendo a primeira da pilha com a Terceira
                </Text>
                <Button
                    color='#000'
                    title='Ir para a "Primeira Tela'
                    onPress={() => navigation.navigate('FirstPage')}
                />
                <Separator />
                <Button
                    color='#000'
                    title='Ir para a "Terceira Tela"'
                    onPress={() => navigation.navigate('ThirdPage')}
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

export default SecondPage;