import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Header from "../../components/Header";
import Button from "../../components/Button";

const SignUp = (): JSX.Element => {
  return (
    <View style={sytles.container}>
      <Header />
      <View style={sytles.inner}>
        <Text style={sytles.title}>Sign Up</Text>
        <TextInput style={sytles.input} value="Email adress" />
        <TextInput style={sytles.input} value="Password" />
        <Button label="Submit" />
        <View style={sytles.footer}>
          <Text style={sytles.footerText}>Already registered?</Text>
          <TouchableOpacity>
            <Text style={sytles.footerLink}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const sytles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDDDDD",
    backgroundColor: "#FFFFFF",
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16,
  },
  footer: {
    flexDirection: "row",
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
    color: "#000000",
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: "#467FD3",
  },
});

export default SignUp;
