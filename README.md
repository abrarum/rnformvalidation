# RNformvalidation
A one screen nice looking form built on react native custom validation rules.

<img src="./imgs/screen_screenshot.png" alt="screenshot of the react native form screen" width="400"/>

<br />
<br />

<h3>Testing conditions</h3>

1. Linux (Ubuntu) 18.04.3 LTS

2. Android Emulator (Android Studio version: 3.5.3)

3. APK and IPA built - (https://appcenter.ms)

4. RN: 0.61.5 | React: 16.9.0 | Native-Base: ^2.13.8 | Node.js: 13.0.1

<br />

<h3>How to Run?</h3>

1. Start the node.js server

`react-native start`

2. After running your emulator from Android Studio / Xcode, open another command line and run

`react-native run-android`

<br />

<h3>Validation rules for each field:</h3>

1. Full Name: No numbers and the field shouldn't be left empty.

2. Mobile Number: No characters, the number should be less than 8 in quantity and the field shouldn't be left empty.

3. Password: Atleast 8 digits and and the field shouldn't be left empty.

<br />

<h3>Imp functions:</h3>

1. onType(): A function that is a handler on the onChangeText method and is called everytime the input is changed. It handles the validation rules mentioned above.

2. onClick(): On the 'Next' button click, this function is called which checks if all the fields are empty OR if there is some error active for either field.
