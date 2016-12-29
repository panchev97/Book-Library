const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_HJ4l1SbSx";
const kinveyAppSecret = "c8668552f5d14764822d03129c30266b";
const kinveyAppAuthHeaders = {
    'Authorization': "Basic " +
    btoa(kinveyAppKey + ":" + kinveyAppSecret),
};