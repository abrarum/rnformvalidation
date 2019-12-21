/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { TextInput, View, Button, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Container, Header, Content, Item, Input, Label, H1, H2, H3, H4, Text } from 'native-base';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            mob: "",
            pass: "",
            errorName: "",
            errorMob_isChar: "",
            errorMob_isMax: "",
            errorPass: "",
            emptyName: "",
            emptyMob: "",
            emptyPass: "",
            errorButton: "",

            displayState1: false,
            displayState2: false,
            displayState3: false,
        };
    }

    tischecker(arr, field) {
        //if name
        if (field === "name") {
            for (var i = 0; i < arr.length; i++) {
                if (isNaN(arr[i])) {
                    this.setState({ errorName: "", displayState1: false });
                } else {
                    return this.setState({ errorName: "Numbers are not allowed", displayState1: true });
                }
            }
        }

        //if mob
        if (field === "mob") {
            for (var j = 0; j < arr.length; j++) {
                if (!isNaN(arr[j])) {
                    this.setState({ errorMob: "", displayState2: false });
                } else {
                    return this.setState({ errorMob: "letters are not allowed", displayState2: true });
                }
            }

            for (var j1 = 0; j1 < arr.length; j1++) {
                if (arr.length < 11) {
                    this.setState({ errorMob: "", displayState2: false });
                } else {
                    return this.setState({ errorMob: "maximum 10 digits", displayState2: true });
                }
            }
        }

        //if pass
        if (field === "pass") {
            console.log(arr);

            if (arr.length >= 1 && arr.length < 8) {
                this.setState({
                    errorPass: "password should be at-least 8 digits", displayState3: true
                });
            } else {
                return this.setState({ errorPass: "", displayState3: false });
            }
        }
    }

    checkEmpty(arr, field) {
        if (arr === undefined || arr.length === 0) {
            if (field === "name") {
                this.setState({ errorName: "Field is empty", displayState1: true });
            }

            if (field === "mob") {
                this.setState({ errorMob: "Field is empty", displayState2: true });
            }

            if (field === "pass") {
                this.setState({ errorPass: "Field is empty", displayState3: true });
            }
        } else {
            if (field === "name") {
                this.setState({ errorName: "", displayState1: false });
            }

            if (field === "mob") {
                this.setState({ errorMob: "", displayState2: false });
            }

            if (field === "pass") {
                this.setState({ errorPass: "", displayState3: false });
            }
        }
    }

    onType(text, field) {
        //if name
        if (field === "name") {
            this.checkEmpty(text, "name");
            //is there any number?
            this.setState({ name: text });
            var x = text;
            var arr = [];

            for (var i = 0; i < x.length; i++) {
                //var temp = x.charAt(i);
                arr.push(x[i]);
            }

            this.tischecker(arr, field);
        }

        //if mob
        if (field === "mob") {
            this.checkEmpty(text, "mob");
            //is there any number?
            this.setState({ mob: text });
            var x1 = text;
            var arr1 = [];

            for (var i1 = 0; i1 < x1.length; i1++) {
                //var temp = x.charAt(i);
                arr1.push(x1[i1]);
            }
            console.log(arr1);
            this.tischecker(arr1, field);
        }

        //if pass
        if (field === "pass") {
            this.checkEmpty(text, "pass");
            //is there any number?
            this.setState({ pass: text });
            var x2 = text;
            var arr2 = [];

            for (var i2 = 0; i2 < x2.length; i2++) {
                //var temp = x.charAt(i);
                arr2.push(x2[i2]);
            }
            console.log(arr2);
            this.tischecker(arr2, field);
        }
    }

    navigatorController(status){
        if(status){
            console.log('good to navigate')
        } else {
            console.log('don\'t navigate')
        }
    }

    onClick() {
        console.log('inside onCLick', this.state.errorName, this.state.errorMob, this.state.errorPass);
        if (
            this.state.errorName === "" &&
            this.state.errorMob === "" &&
            this.state.errorPass === "" &&
            (this.state.name !== "" &&
                this.state.mob !== "" &&
                this.state.pass !== "")
        ) {
            this.navigatorController(true)
            //this.setState({  });
        } else if (
            this.state.name === "" ||
            this.state.mob === "" ||
            this.state.pass === ""
        ) {
            this.setState({ 
                displayState1: true, 
                displayState2: true, 
                displayState3: true,
                errorName: 'Fields must be filled',
                errorMob: 'Fields must be filled',
                errorPass: 'Fields must be filled',
             });

             this.navigatorController(false)
        } else {
            this.navigatorController(false)
        }
    }

    render() {
        
        return (
            <Container>
                <Content padder style={{ marginTop: 30, marginBottom: 30 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.headshot}>User Info</Text>

                        <View style={styles.central}>
                            <View style={{
                                /* Style for "Rectangle" */
                                width: 14,
                                height: 14,
                                border: "1px solid #0d3447",
                                backgroundColor: "#0d3447",
                                borderWidth: 1,
                                borderColor: "#0d3447"
                            }}>
                            </View>

                            <View style={{
                                /* Style for "Rectangle" */
                                width: 14,
                                height: 14,
                                borderWidth: 1,
                                borderColor: "#57dcdc"
                            }}>
                            </View>

                            <View style={{
                                /* Style for "Rectangle" */
                                width: 14,
                                height: 14,
                                borderWidth: 1,
                                borderColor: "#57dcdc"

                            }}>
                            </View>
                        </View>

                        <H2 style={styles.headline}>Create an Account</H2>

                        <View style={{ width: '60%', marginTop: 30 }}>
                            <View>
                                <Label style={styles.form_label}> Full Name</Label>
                                <Item rounded style={styles.form_box}>
                                    <Input
                                        style={styles.form_input}
                                        placeholderTextColor='rgba(112, 112, 112, 0.63)'
                                        placeholder='First and Last name'
                                        onChangeText={text => this.onType(text, "name")}
                                        value={this.state.name}
                                    />
                                </Item>

                                <Text style={[this.state.displayState1 ? styles.error_active : styles.error_sleep]}>{this.state.errorName}</Text>
                            </View>

                            <View style={{ paddingTop: 10 }}>
                                <Label style={styles.form_label}>Mobile Number</Label>
                                <Item rounded style={styles.form_box}>
                                    <Input
                                        style={styles.form_input}
                                        placeholderTextColor='rgba(112, 112, 112, 0.63)'
                                        placeholder='+966'
                                        onChangeText={text => this.onType(text, "mob")}
                                        value={this.state.mob}
                                    />
                                </Item>
                                <Text style={[this.state.displayState2 ? styles.error_active : styles.error_sleep]}>{this.state.errorMob}</Text>
                            </View>

                            <View style={{ paddingTop: 10 }}>
                                <Label style={styles.form_label}>Password</Label>
                                <Item rounded style={styles.form_box}>
                                    <Input
                                        style={styles.form_input}
                                        placeholderTextColor='rgba(112, 112, 112, 0.63)'
                                        placeholder='at least 8-digits'
                                        onChangeText={text => this.onType(text, "pass")}
                                        value={this.state.pass}
                                        secureTextEntry={true}
                                    />
                                </Item>
                                <Text style={[this.state.displayState3 ? styles.error_active : styles.error_sleep]}>{this.state.errorPass}</Text>
                            </View>



                            <TouchableOpacity
                                style={{ alignItems: 'center', marginTop: 40 }}
                                onPress={() => this.onClick()}>
                                <Text style={styles.button_text}>Next</Text>
                                <Image
                                    style={styles.form_button}
                                    source={require('./imgs/button-1.png')}
                                />
                            </TouchableOpacity>


                            <Text>{this.state.errorButton}</Text>
                        </View>

                        <View>
                            <Text style={styles.foot1}>Already registered? <Text style={styles.foot2}>Login</Text></Text>
                        </View>
                    </View>

                </Content>
            </Container >

        );
    }
}

const styles = StyleSheet.create({
    central: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 180,
        paddingTop: 20
    },

    headshot: {
        fontSize: 18,
        fontWeight: "400",
        lineHeight: 30
    },

    headline: {
        marginTop: 50,
        color: "#0d3447",
        fontFamily: 'Tajawal',
        fontSize: 23,
        fontWeight: "700",
        lineHeight: 30,
        textShadowColor: 'rgba(0, 0, 0, 0.16)',
        textShadowOffset: { width: 0, height: 3 },
        textShadowRadius: 6
    },

    form_label: {
        color: "#0d3447",
        fontFamily: "Tajawal",
        fontSize: 15,
        fontWeight: "700",
        lineHeight: 30,
    },

    form_box: {
        borderRadius: 7,
        height: 42,
        shadowColor: 'rgba(13, 52, 71, 0.13)',
        shadowOffset: { width: 0, height: 5 },
        //shadowOpacity: 0.8,
        shadowRadius: 15,
        elevation: 1,
        borderWidth: 1,
        borderColor: "#fb6565",
        backgroundColor: "#ffffff",
    },

    form_input: {
        fontSize: 14,
        fontWeight: "400",
        fontFamily: "Tajawal"
    },

    form_button: {
        width: 264,
        borderRadius: 7,
        shadowColor: 'rgba(252, 158, 134, 0.3)',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 15,
    },

    button_text: {
        position: 'absolute', top: 15, elevation: 1, color: '#fff', fontSize: 20, fontWeight: "700"
    },

    foot1: {
        color: "#a5a5a5",
        fontFamily: "Tajawal",
        fontSize: 15,
        fontWeight: "400",
    },

    foot2: {
        color: "#13a3d5",
        fontFamily: "Tajawal",
        fontSize: 18,
        fontWeight: "700",
    },

    error_active: {
        display: 'flex',
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        backgroundColor: "#fb6565",
        shadowColor: 'rgba(13, 52, 71, 0.13)',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 15,
        color: '#fff',
        paddingLeft: 7,
        fontSize: 14,
        bottom: 5,
        elevation: 1
    },

    error_sleep: {
        display: 'none',
        borderRadius: 0,
        backgroundColor: 'transparent'
    }
});
