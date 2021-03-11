import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content, Card, CardItem, Body, Icon } from 'native-base';
import AppHeader from '../../Header';

export default class CasesScreen extends React.Component {
    render() {
        return (
            <Container>
                <AppHeader
                    title="Manage My Case"
                    subtitle="Cases"
                    headerBackButton={true}
                    backFunction={() => this.props.navigation.goBack()}
                    searchButton={true}
                />
                <Content contentContainerStyle={{ minHeight: '100%' }}>
                    <View style={styles.container}>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CaseDetail')}>
                            <Card>
                                <CardItem>
                                    <Body>
                                        <View style={styles.col}>
                                            <View style={styles.row}>
                                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>This is new</Text>
                                                <Icon type="Feather" name="more-vertical" />
                                            </View>

                                            <View style={styles.row}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text>Appearing As: </Text>
                                                    <Text style={{ color: 'grey' }}>Petitoner</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text>Year: </Text>
                                                    <Text style={{ color: 'grey' }}>2019</Text>
                                                </View>
                                            </View>

                                            <View style={styles.row}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text>Count: </Text>
                                                    <Text style={{ color: 'grey' }}>Supreme Court</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text>Status: </Text>
                                                    <Text style={{ color: 'grey' }}>Pending</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </Body>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CaseDetail')}>
                            <Card>
                                <CardItem>
                                    <Body>
                                        <View style={styles.col}>
                                            <View style={styles.row}>
                                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>This is new</Text>
                                                <Icon type="Feather" name="more-vertical" />
                                            </View>

                                            <View style={styles.row}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text>Appearing As: </Text>
                                                    <Text style={{ color: 'grey' }}>Petitoner</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text>Year: </Text>
                                                    <Text style={{ color: 'grey' }}>2019</Text>
                                                </View>
                                            </View>

                                            <View style={styles.row}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text>Count: </Text>
                                                    <Text style={{ color: 'grey' }}>Supreme Court</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text>Status: </Text>
                                                    <Text style={{ color: 'grey' }}>Pending</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </Body>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CaseDetail')}>
                            <Card>
                                <CardItem>
                                    <Body>
                                        <View style={styles.col}>
                                            <View style={styles.row}>
                                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>This is new</Text>
                                                <Icon type="Feather" name="more-vertical" />
                                            </View>

                                            <View style={styles.row}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text>Appearing As: </Text>
                                                    <Text style={{ color: 'grey' }}>Petitoner</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text>Year: </Text>
                                                    <Text style={{ color: 'grey' }}>2019</Text>
                                                </View>
                                            </View>

                                            <View style={styles.row}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text>Count: </Text>
                                                    <Text style={{ color: 'grey' }}>Supreme Court</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text>Status: </Text>
                                                    <Text style={{ color: 'grey' }}>Pending</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </Body>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CaseDetail')}>
                            <Card>
                                <CardItem>
                                    <Body>
                                        <View style={styles.col}>
                                            <View style={styles.row}>
                                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>This is new</Text>
                                                <Icon type="Feather" name="more-vertical" />
                                            </View>

                                            <View style={styles.row}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text>Appearing As: </Text>
                                                    <Text style={{ color: 'grey' }}>Petitoner</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text>Year: </Text>
                                                    <Text style={{ color: 'grey' }}>2019</Text>
                                                </View>
                                            </View>

                                            <View style={styles.row}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text>Count: </Text>
                                                    <Text style={{ color: 'grey' }}>Supreme Court</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text>Status: </Text>
                                                    <Text style={{ color: 'grey' }}>Pending</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </Body>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CaseDetail')}>
                            <Card>
                                <CardItem>
                                    <Body>
                                        <View style={styles.col}>
                                            <View style={styles.row}>
                                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>This is new</Text>
                                                <Icon type="Feather" name="more-vertical" />
                                            </View>

                                            <View style={styles.row}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text>Appearing As: </Text>
                                                    <Text style={{ color: 'grey' }}>Petitoner</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text>Year: </Text>
                                                    <Text style={{ color: 'grey' }}>2019</Text>
                                                </View>
                                            </View>

                                            <View style={styles.row}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text>Count: </Text>
                                                    <Text style={{ color: 'grey' }}>Supreme Court</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text>Status: </Text>
                                                    <Text style={{ color: 'grey' }}>Pending</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </Body>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>





                    </View>
                </Content>
                <TouchableOpacity style={styles.addButton}><Icon type="Ionicons" name="ios-add" style={styles.addButtonIcon} /></TouchableOpacity>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    col: {
        flexDirection: 'column',
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,

        backgroundColor: '#b33f3f',

        borderRadius: 25,
    },
    addButtonIcon: {
        fontSize: 40,
        color: '#fff',



    },
});