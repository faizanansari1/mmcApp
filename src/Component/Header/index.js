import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, Left, Button, Icon, Body, Title, Right, Subtitle } from 'native-base';

export default function AppHeader(props) {
    return (
        <Header style={{ backgroundColor: '#b33f3f', elevation:6, }}>
            <Left>
                {!props.headerBackButton ? <Button transparent onPress={props.drawerOpened}>
                    <Icon name='menu' />
                </Button> : <Button transparent onPress={props.backFunction}>
                        <Icon name='arrow-back' />
                    </Button>}

            </Left>
            <Body>
                <Title style={styles.title}>{props.title}</Title>
                <Subtitle style={styles.subtitle}>{props.subtitle}</Subtitle>
            </Body>
            <Right>
                {props.searchButton && <Button transparent>
                    <Icon name='search' type="Fontisto" />
                </Button>}
            </Right>
        </Header>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
    },
    subtitle: {
        fontSize: 14,
        color: '#ccc'
    }
});