import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Container, Content } from "native-base";
import { DrawerItemList } from "@react-navigation/drawer";
export default class SideBar extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <Image
                        source={{
                            uri: "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        }}
                        style={{
                            height: 120,
                            alignSelf: "stretch",
                            justifyContent: "center",
                            alignItems: "center",
                            width: '100%'
                        }}>

                    </Image>
                    <View style={styles.row}>
                        <View>
                            <Image source={require('../../src/Component/Login/images/person.png')} style={styles.adminIcon} />
                        </View>

                    </View>
                    <DrawerItemList {...this.props} />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    adminIcon: {
        width: 50,
        height: 50,
    },

});