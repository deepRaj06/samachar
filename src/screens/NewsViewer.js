import {StyleSheet, Text, View, Linking} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

const NewsViewer = ({navigation, route}) => {
  const {url} = route.params;
  console.log('url', url);
  const encodedURL = encodeURIComponent(url);

  const onShouldStartLoadWithRequest = (event) => {
    const { url, navigationType } = event;
    console.log('navigationType', navigationType);
    if (navigationType === 'click') {
      // Open the URL in an external web browser or system browser
      Linking.openURL(url);
      return false; // Return false to prevent loading the URL in the WebView
    }
    return true; // Allow other types of navigation (e.g., iframe)
  };

  return (
    // <View>
      <WebView
        // source={{uri: "http://www.livemint.com/sports/cricket-news/india-vs-new-zealand-live-score-updates-icc-cricket-world-cup-2023-22-october-ind-vs-nz-rohit-kohli-latham-dharamshala-11697939989587.html"}}
        source={{uri: `${url}`}}
        style={{flex: 1}}
        mixedContentMode="compatibility"
        // userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
        javaScriptEnabled={true}
        // onError={(error) => console.log(error)}
        // onHttpError={(error) => console.log(error)}
        // onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
        // startInLoadingState={true}
        // injectedJavaScript={`console.log = function(msg) { window.postMessage(msg); }`}
      />
    // </View>
  );
};

export default NewsViewer;

const styles = StyleSheet.create({});
