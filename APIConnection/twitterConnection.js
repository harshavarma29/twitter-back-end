const {TwitterClient} = require('twitter-api-client');

const twitter = new TwitterClient({
    apiKey: 'q7pcnvgUBJStlGqWDX1OMVDYk',
    apiSecret: 'geT0jEuMyOJIlOC6DlnP24KQA57IWuKrHvhZaBES6bluyE1e7p',
    accessToken: '1348574593900978176-QnhCy2YHOSploxl0D6CWMKmRg7YwBI',
    accessTokenSecret: '98LzF1HBpa8LnGgCuqURRddXcYzrD2JzSDqdd7H7olp0x'
})

module.exports = {twitter};