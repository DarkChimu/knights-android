import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
    Button
  } from 'react-native';
import { Linking } from 'react-native';

export default class ExternalLink extends Component {

    _openLink = async () => {
        const { link } = this.props;

        if (await Linking.canOpenURL(link)) {
            Linking.openURL(link);
        }
    }

    render() {
        const { children } = this.props;

        return (
            <TouchableOpacity accessibilityRole='link' onPress={this._openLink}>
                {children}
            </TouchableOpacity>
        );
    }
}