import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import AppHeader from '../../Header';

export default class TeamScreen extends React.Component {
    render() {
        return (
            <Container>
                <AppHeader
                    title="Team"
                    subtitle="Our Team"
                    headerBackButton={true}
                    backFunction={() => this.props.navigation.goBack()}
                />
                <Content>
                    <View><Text>Hello Team</Text></View>
                </Content>

                {/* <Footer>
                    <FooterTab style={{backgroundColor:'red'}}>
                        <Button vertical >
                            <Icon name="apps" />
                            <Text>Apps</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="camera" />
                            <Text>Camera</Text>
                        </Button>
                        <Button vertical active>
                            <Icon name="navigate" />
                            <Text>Navigate</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="person" />
                            <Text>Contact</Text>
                        </Button>
                    </FooterTab> 
                </Footer>*/}
            </Container>
        );
    }
}

const styles = StyleSheet.create({

});