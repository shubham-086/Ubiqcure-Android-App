import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { AntDesign } from "@expo/vector-icons";

const Login = () => {
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    patientName: false,
    age: false,
    gender: false,
    phoneNumber: false,
  });

  const handleInputChange = (field, value) => {
    switch (field) {
      case "patientName":
        setPatientName(value);
        setErrors((prevErrors) => ({ ...prevErrors, patientName: !value }));
        break;
      case "age":
        setAge(value);
        setErrors((prevErrors) => ({ ...prevErrors, age: !value }));
        break;
      case "gender":
        setGender(value);
        setErrors((prevErrors) => ({ ...prevErrors, gender: !value }));
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: !value }));
        break;
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    if (!patientName || !age || !gender || !phoneNumber) {
      setErrors({
        patientName: !patientName,
        age: !age,
        gender: !gender,
        phoneNumber: !phoneNumber,
      });
    } else {
      console.log("Form submitted:", {
        patientName,
        age,
        gender,
        phoneNumber,
        email,
      });
    }
  };
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <View className="p-8 w-full">
        <View className="mb-10">
          <Text className="text-4xl font-bold text-start text-primary mb-3">
            Login
          </Text>
          <Text className="text-primary text-start text-lg">
            Please varify your phone number.
          </Text>
        </View>
        <View className="mb-4">
          <View
            className={`p-3 ${
              errors.phoneNumber ? "border-red-600" : "border-primary"
            } border rounded-lg flex-row justify-between items-center`}
          >
            <TextInput
              placeholder="Phone Number"
              value={phoneNumber}
              keyboardType="numeric"
              inputMode="numeric"
              maxLength={10}
              onChangeText={(text) => handleInputChange("phoneNumber", text)}
              className="text-lg bg-white"
            />
            {errors.phoneNumber && (
              <AntDesign name="exclamationcircleo" size={20} color="red" />
            )}
          </View>
        </View>
        <View className="flex justify-center mt-5">
          <Text
            onPress={handleSubmit}
            className="text-xl bg-primary text-center text-white border border-primary font-bold py-3 px-4 rounded"
          >
            Varify
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
