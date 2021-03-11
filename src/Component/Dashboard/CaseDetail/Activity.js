import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { Container, Content, Icon } from 'native-base';

export default class Activity extends React.Component{
    render(){
        return(
            <Container>
                <Content>
                    <View style={styles.container}>
                        <View style={styles.col}>
                            <View style={styles.row}>
                                {/* <Image source={require('../../Login/images/')} /> */}
                            </View>
                        </View>
                        </View>
                </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:15,
    },
});
