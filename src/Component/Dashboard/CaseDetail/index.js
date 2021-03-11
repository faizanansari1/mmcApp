import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Tabs, Tab, Icon, ScrollableTab, TabHeading } from 'native-base';
import AppHeader from '../../Header';
import CaseInfo from './caseInfo';
import Activity from './Activity';

export default class CaseDetail extends React.Component {
    render() {
        return (
            <Container>
                <AppHeader
                    headerBackButton={true}
                    backFunction={() => this.props.navigation.goBack()}
                    title="Manage My Case"
                    subtitle="Case Details"
                />
                <View style={styles.content}>
                    <View style={styles.iconRow}>
                        <Icon type="AntDesign" name="book" style={{ fontSize: 45, color: 'white' }} />
                    </View>
                    <View style={styles.col}>
                        <View style={styles.row}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Case Low</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>aaaa</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>Petitioner</Text>
                            <Text style={styles.text}>Date of Filing: 25 jul 2019</Text>
                        </View>

                    </View>

                </View>
                {/* <Tabs>
                    <Tab heading={<TabHeading style={styles.tab}>
                        <Icon type="Foundation" name="info" style={styles.tabIcon} />
                        <Text style={styles.tabText}>Case info</Text>
                    </TabHeading>}>
                        <Content>
                        <CaseInfo />
                        </Content>
                    </Tab>
                    <Tab heading={<TabHeading style={styles.tab}>
                        <Icon type="Feather" name="activity" style={styles.tabIcon} />
                        <Text style={styles.tabText}>Activity History</Text>
                    </TabHeading>}>
                        <Tab2 />
                    </Tab>
                    <Tab heading="Tab3" >
                       
                    </Tab>
                </Tabs> */}

                <Tabs renderTabBar={() => <ScrollableTab />}>
                    <Tab heading={<TabHeading style={styles.tab}>
                        <Icon type="Foundation" name="info" style={styles.tabIcon} />
                        <Text style={styles.tabText}>Case info</Text>
                    </TabHeading>}>
                        <Content>
                            <CaseInfo />
                        </Content>
                    </Tab>
                    <Tab heading={<TabHeading style={styles.tab}>
                        <Icon type="Feather" name="activity" style={styles.tabIcon} />
                        <Text style={styles.tabText}>Activity History</Text>
                    </TabHeading>}>
                        <Content>
                            <Activity />
                        </Content>
                    </Tab>
                    <Tab heading="Tab3">
                        {/* <Tab3 /> */}
                    </Tab>
                    <Tab heading="Tab4">
                        {/* <Tab4 /> */}
                    </Tab>
                    <Tab heading="Tab5">
                        {/* <Tab5 /> */}
                    </Tab>
                </Tabs>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        padding: 15,
        flexDirection: 'row',
        backgroundColor: '#b33f3f',
    },

    iconRow: {
        justifyContent: 'center',
    },
    col: {
        flexDirection: 'column',
        width: '80%',
        marginLeft: 5,
    },
    row: {
        flexDirection: 'row',
        // borderWidth:1,
        // borderColor:'blue',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 14,
        fontWeight: '600',
        color: 'white',
    },
    tab: {
        backgroundColor: '#b33f3f',
        paddingHorizontal: 20,
    },
    tabText: {
        color: 'white',
        fontSize: 14,
        marginRight: 10,
    },
    tabIcon: {
        fontSize: 35,
        color: 'white',
        marginHorizontal: 10,
    },
});
