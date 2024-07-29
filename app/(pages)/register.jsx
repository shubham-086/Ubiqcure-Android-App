import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

const Register = () => {
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
          <Text className="text-4xl font-bold text-start text-primary mb-2">
            Register
          </Text>
          <Text className="text-primary text-start text-lg">
            Please enter your details to proceed.
          </Text>
        </View>
        <View className="mb-4">
          <View
            className={`p-3 ${
              errors.patientName ? "border-red-600" : "border-primary"
            } border rounded-lg flex-row justify-between items-center`}
          >
            <TextInput
              placeholder="Patient Name"
              value={patientName}
              onChangeText={(text) => handleInputChange("patientName", text)}
              className="text-lg bg-white"
            />
            {errors.patientName && (
              <AntDesign name="exclamationcircleo" size={20} color="red" />
            )}
          </View>
        </View>
        <View className="flex-row mb-4">
          <View className="w-1/2 pr-1">
            <View
              className={`p-1 ${
                errors.gender ? "border-red-600" : "border-primary"
              } border rounded-lg `}
            >
              <Picker
                selectedValue={gender}
                onValueChange={(itemValue) =>
                  handleInputChange("gender", itemValue)
                }
                style={{ margin: -5 }}
              >
                <Picker.Item label="Gender" value="" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
              </Picker>
            </View>
          </View>
          <View className="w-1/2 pl-1">
            <View
              className={`p-3 ${
                errors.age ? "border-red-600" : "border-primary"
              } border rounded-lg flex-row justify-between items-center`}
            >
              <TextInput
                placeholder="Age"
                value={age}
                keyboardType="numeric"
                maxLength={2}
                inputMode="numeric"
                onChangeText={(text) => handleInputChange("age", text)}
                className="text-lg bg-white"
              />
              {errors.age && (
                <AntDesign name="exclamationcircleo" size={20} color="red" />
              )}
            </View>
          </View>
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
        <View className="p-3 border-primary border rounded-lg">
          <TextInput
            placeholder="Email (optional)"
            value={email}
            onChangeText={(text) => handleInputChange("email", text)}
            className="text-lg bg-white"
          />
        </View>
        <View className="flex justify-center mt-10">
          <Text
            onPress={handleSubmit}
            className="text-xl bg-primary text-center text-white border border-primary font-bold py-3 px-4 rounded"
          >
            Submit
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Register;
