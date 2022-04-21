import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Input, Icon, Button } from '@rneui/themed';
import { WebView } from 'react-native-webview';

const INJECTED_JAVASCRIPT = `(function() {
    const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);
  })();`;

export default function AssetExample({ route, navigation }) {


    console.log(route.params)


    return (
        <WebView source={{ uri: route.params.link }}
            injectedJavaScript={INJECTED_JAVASCRIPT}
        />
    );
}

// route.params
// https://reactnative.dev/
// 'https://drive.google.com/file/d/1veZWeMYQfT9qeRBoVke7BRGlrtsQbR90/view?usp=sharing'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    paragraph: {
        margin: 24,
        marginTop: 0,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    logo: {
        height: 128,
        width: 128,
    }
});
