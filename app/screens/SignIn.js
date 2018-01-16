import React from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";
import { connect } from 'react-redux';

const toggleAction = () => ({
    type: '[Auth] login'
});

class SignIn extends React.Component {
    render() {
        const { navigation, toggleAction } = this.props;
        toggleAction();
        return (
            <View style={{ paddingVertical: 20 }}>
                <Card>
                    <FormLabel>Email</FormLabel>
                    <FormInput placeholder="Email address..." />
                    <FormLabel>Password</FormLabel>
                    <FormInput secureTextEntry placeholder="Password..." />

                    <Button
                        buttonStyle={{ marginTop: 20 }}
                        backgroundColor="#03A9F4"
                        title="SIGN IN"
                        onPress={() => {
                            onSignIn().then(() => navigation.navigate("SignedIn"));
                        }}
                    />
                </Card>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
  return {
      state
  }
};

export default connect(mapStateToProps, { toggleAction })(SignIn);
