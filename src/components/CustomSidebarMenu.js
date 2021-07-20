import * as React from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text, Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import ImageLogoIfs from '/home/lua/v2_mundo_coletor/src/components/ImageLogoIfs';
import logo_ifs from '/home/lua/v2_mundo_coletor/assets/logo-ifs.png';

const CustomSidebarMenu = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.sideUserArea}>
                <Text style={styles.sideUseName}>Tópicos Especiais I</Text>
                <Text style={styles.sideUseName}>Prof.: Paulo Amaral</Text>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem
                    label='Coleta Seletiva'
                    activeTintColor='#730000'
                    inactiveTintColor='#730000'
                    onPress={() => Linking.openURL('https://www.todamateria.com.br/coleta-seletiva/')}
                />
                <View style={styles.customItem}>
                    <Text
                        style={{ color: '#000' }}
                        onPress={() => Linking.openURL('https://www.blogiveco.com.br/reciclagem-e-coleta-seletiva-dicas-e-cuidados/#:~:text=Separar%20o%20lixo%20seco%20de,de%20papel%20limpo%20e%20reciclável.&text=Lavar%20as%20embalagens%20para%20eliminar,que%20o%20material%20seja%20reciclado.')}>
                        Dicas e Cuidados
                    </Text>
                </View>
            </DrawerContentScrollView>
            <View style={styles.sideUserArea}>
                <ImageLogoIfs
                    style={{ height: 20, width: 10 }}
                    fromWeb={false}
                    image={logo_ifs}
                    title={'Análise e Desenvolvimento de Sistemas'}
                    text={'Luana Carvalho | @carvalho21'}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sideUserArea: {
        marginTop: 15,
        marginLeft: 10,
        marginBottom: 10,
        alignItems: 'center',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    },
    sideProfileIcon: {
        resizeMode: 'center',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center'
    },
    sideUseName: {
        marginTop: 10,
        marginBottom: 20,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    sideUserEmail: {
        fontSize: 14,
        marginBottom: 10,
        color: '#000',
    },
    iconStyle: {
        width: 15,
        height: 15,
        marginHorizontal: 5,
    },
    customItem: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default CustomSidebarMenu;

