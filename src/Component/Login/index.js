import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Form, Item, Label, Input, Button } from 'native-base';
// import { Constants } from 'expo';

export default class LoginScreen extends React.Component {
    render() {
        return (
            <Container>
                <Content contentContainerStyle={{
                    minHeight: '100%',
                }}>
                    <ImageBackground source={require('./images/bg.jpg')} style={styles.bgImg}>
                        <View style={styles.container}>
                            <View style={styles.content}>
                                <Image source={require('./images/MMC-logo.png')} style={styles.loginLogo} />
                                <Form style={styles.form}>
                                    <View style={styles.formItem}>
                                        <Input placeholder="Username" style={styles.input}/>
                                    </View>
                                    <View style={styles.formItem}>

                                        <Input placeholder="Password" />
                                    </View>

                                    <Button block danger style={styles.loginbtn} onPress={() => this.props.navigation.navigate('DrawerNav')}>
                                        <Text style={{color:'white', fontSize:18,}}>Login</Text>
                                    </Button>

                                </Form>

                                <View style={{ flexDirection: 'column', alignItems: "center" }}>
                                    <Text style={styles.forgetText}>Forgot Password ?</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={styles.forgetText}>Don't have an account?</Text>
                                        <TouchableOpacity><Text style={{fontWeight:'bold', color:'#b33f3f', paddingHorizontal:5,}}>Sing Up</Text></TouchableOpacity>
                                        <Text style={styles.forgetText}>instead</Text>
                                        </View>

                                </View>


                            </View>

                        </View>

                        <View style={styles.footerview}><Text style={{ color: '#ccc', fontSize:12 }}>Powered by FXD Digital services </Text></View>
                    </ImageBackground>
                </Content>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    bgImg: {
        flex: 1,
        resizeMode: 'cover',
        // borderWidth: 1,
        // borderColor: 'blue',
        // marginTop: Constants.statusBarHeight,
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        justifyContent: 'center',
        alignItems: "center",

    },

    footerview: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        padding: 8,
        backgroundColor: '#b33f3f',
        alignItems: 'center',
    },

    content: {
        width: '80%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    loginLogo: {
        flex: 1,
        width: 50,
        height: 50,
        marginBottom: 30,
    },
    form: {
        width: '100%',
    },
    formItem: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        marginBottom: 20,
        paddingLeft:10,
    },
    loginbtn: {
        borderRadius: 5,
        backgroundColor: '#b33f3f',
        marginBottom:35,
    },
    forgetText: {
        color: '#838383',
        marginBottom:5,
        fontWeight:'bold'
    }
});