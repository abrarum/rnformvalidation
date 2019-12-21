# RNformvalidation
A one screen nice looking form built on react native custom validation rules.

<img src="./imgs/screen_screenshot.png" alt="screenshot of the react native form screen" width="400"/>
<br />
<br />
Validation rules for each field:

1. Full Name: No numbers and the field shouldn't be left empty.
2. Mobile Number: No characters, the number should be less than 8 in quantity and the field shouldn't be left empty.
3. Password: Atleast 8 digits and and the field shouldn't be left empty.

<br />

Imp functions:

1. onType(): A function that is a handler on the onChangeText method and is called everytime the input is changed. It handles the validation rules mentioned above.

2. onClick(): On the 'Next' button click, this function is called which checks if all the fields are empty OR if there is some error active for either field.
