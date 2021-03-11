import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import AppHeader from '../Header';
import * as  Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default class DashboardScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
    }

    render() {
        return (
            <Container>
                <AppHeader
                    title="Manage My Case"
                    subtitle="Dashboard"
                    headerBackButton={false}
                    drawerOpened={() => this.props.navigation.openDrawer()}
                />
                <Content contentContainerStyle={{ minHeight: '100%' }}>
                    <View style={styles.container}>
                        <Text style={styles.heading}>MANAGE MY CASE FEATURES</Text>

                        <View style={styles.manageSction}>
                            <View style={{ flexDirection: 'row' }}>

                                <TouchableOpacity style={styles.innerbox} onPress={() => this.props.navigation.navigate('Case')}>
                                    <Icon type="Feather" name="briefcase" style={styles.boxIcon, { color: '#e5b761', marginBottom: 10, }} />
                                    <Text style={styles.boxText}>Cases</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.innerbox} onPress={() => this.props.navigation.navigate('MyTabs')}>
                                    <Icon type="FontAwesome5" name="user-friends" style={styles.boxIcon, { color: '#6a9fc8', marginBottom: 10, }} />
                                    <Text style={styles.boxText}>Team</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.innerbox}>
                                    <Icon type="Fontisto" name="person" style={styles.boxIcon, { color: '#333333', marginBottom: 10, }} />
                                    <Text style={styles.boxText}>Advocate</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.innerbox}>
                                    <Icon type="AntDesign" name="calendar" style={styles.boxIcon, { color: '#9ba1d3', marginBottom: 10, }} />
                                    <Text style={styles.boxText}>Calendar</Text>
                                </TouchableOpacity>

                            </View>

                            <View style={{ flexDirection: 'row' }}>

                                <TouchableOpacity style={styles.innerbox}>
                                    <Icon type="FontAwesome" name="list-ul" style={styles.boxIcon, { color: '#9ba1d3', marginBottom: 10, }} />
                                    <Text style={styles.boxText}>To-Dos</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.innerbox}>
                                    <Icon type="MaterialCommunityIcons" name="file-document-box-multiple-outline" style={styles.boxIcon, { color: '#e4b5eb', marginBottom: 10, }} />
                                    <Text style={styles.boxText}>Documents</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.innerbox}>
                                    <Icon type="MaterialCommunityIcons" name="file-document-box-outline" style={styles.boxIcon, { color: '#c5b6ab', marginBottom: 10, }} />
                                    <Text style={styles.boxText}>Bills</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.innerbox}>
                                    <Icon type="MaterialCommunityIcons" name="notebook" style={styles.boxIcon, { color: '#ca879d', marginBottom: 10, }} />
                                    <Text style={styles.boxText}>Cases Diry</Text>
                                </TouchableOpacity>

                            </View>
                        </View>

                        <Text style={styles.heading}>STATUS OVERVIEW</Text>

                        <View style={styles.manageSction}>
                            <View style={{ flexDirection: 'row' }}>

                                <TouchableOpacity style={styles.innerbox}>
                                    <Icon type="Feather" name="briefcase" style={styles.boxIcon, { color: '#eabb6a', marginBottom: 10, }} />
                                    <Text style={styles.boxText}>No-of</Text>
                                    <Text style={styles.boxText}>Hours</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.innerbox}>
                                    <Icon type="FontAwesome5" name="user-friends" style={styles.boxIcon, { color: '#7ab0d8', marginBottom: 10, }} />
                                    <Text style={styles.boxText}>Total</Text>
                                    <Text style={styles.boxText}>To-Dos</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.innerbox}>
                                    <Icon type="Fontisto" name="person" style={styles.boxIcon, { color: '#333333', marginBottom: 10, }} />
                                    <Text style={styles.boxText}>Clients</Text>
                                    <Text style={styles.boxText}>Added</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.innerbox}>
                                    <Icon type="AntDesign" name="calendar" style={styles.boxIcon, { color: '#38a880', marginBottom: 10, }} />
                                    <Text style={styles.boxText}>Cases</Text>
                                    <Text style={styles.boxText}>Added</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <Text style={styles.heading}>OTHER SERVICES</Text>

                        <View style={styles.manageSction}>
                            <View style={{ flexDirection: 'row' }}>

                                <TouchableOpacity style={styles.innerbox}>
                                    <Icon type="MaterialIcons" name="feedback" style={styles.boxIcon, { color: '#9da0d4', marginBottom: 10, }} />
                                    <Text style={styles.boxText}>Your</Text>
                                    <Text style={styles.boxText}>Feedback</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.innerbox}>
                                    <Icon type="AntDesign" name="contacts" style={styles.boxIcon, { color: '#d1e155', marginBottom: 10, }} />
                                    <Text style={styles.boxText}>Contact</Text>
                                    <Text style={styles.boxText}>Support</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.innerbox}>
                                    <Icon type="MaterialCommunityIcons" name="file-document-edit-outline" style={styles.boxIcon, { color: '#9bc4f1', marginBottom: 10, }} />
                                    <Text style={styles.boxText}>About</Text>
                                    <Text style={styles.boxText}>MMC</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.innerbox}>
                                    <Icon type="Foundation" name="info" style={styles.boxIcon, { color: '#a84644', marginBottom: 10, }} />
                                    <Text style={styles.boxText}>Cases</Text>
                                    <Text style={styles.boxText}>Added</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    heading: {
        padding: 15,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#696969',
    },
    manageSction: {
        borderWidth: 0,
        borderColor: '#D3D3D3',
        elevation: 2,
    },
    innerbox: {
        borderWidth: 1,
        borderColor: '#D3D3D3',
        width: '25%',
        paddingVertical: 20,
        alignItems: "center",

    },
    boxIcon: {
        fontSize: 30,
        marginBottom: 10,
    },
    boxText: {
        // fontSize: 14,
        fontWeight: 'bold',
        color: '#696969',
    },

});
