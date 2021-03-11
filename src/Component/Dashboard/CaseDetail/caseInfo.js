import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

export default class CaseInfo extends React.Component {
    render() {
        return (

            <View style={styles.container}>
                <View style={styles.info}>
                    <View style={styles.row}>
                        <Text style={styles.text1}>File No</Text>
                        <Text style={styles.text2}>27</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text1}>Count</Text>
                        <Text style={styles.text2}>aaaa</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text1}>Reffered By</Text>
                        <Text style={styles.text2}>bbbb</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text1}>Your Are Appering As</Text>
                        <Text style={styles.text2}>Petitioner</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text1}>Appering As Name</Text>
                        <Text style={styles.text2}>ASIM TEXTTILE  MILLS LIMITED</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text1}>Affidavit Filled</Text>
                        <Text style={styles.text2}>No</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text1}>Case Type</Text>
                        <Text style={styles.text2}>Apeal From Order</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text1}>Case No</Text>
                        <Text style={styles.text2}>1111</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text1}>Year</Text>
                        <Text style={styles.text2}>2014</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text1}>Date Of Filling</Text>
                        <Text style={styles.text2}>25 Jul 2014 </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text1}>Stage</Text>
                        <Text style={styles.text2}>  </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text1}>Posted For</Text>
                        <Text style={styles.text2}>  </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text1}>Last Action Taken</Text>
                        <Text style={styles.text2}>  </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text1}>Next Hearing Date</Text>
                        <Text style={styles.text2}>01 Jan 1900</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={[styles.text1, { borderBottomWidth: 1 }]}>Session</Text>
                        <Text style={[styles.text2, { borderBottomWidth: 1 }]}>   </Text>
                    </View>

                </View>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        borderColor: 'grey',
        elevation: 2,
        margin: 5,
    },
    info: {
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
    },
    text1: {
        borderColor: 'grey',
        width: '50%',
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontWeight: 'bold',
        borderWidth: 1,
        borderBottomWidth: 0,
    },
    text2: {
        borderColor: 'grey',
        width: '50%',
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: 'grey',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomWidth: 0
    },
});
