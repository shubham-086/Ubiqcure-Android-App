import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import Header from "../../components/Header";
import { AntDesign } from "@expo/vector-icons";

const PatientForm = () => {
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
    <View className="flex-1 bg-white">
      <ScrollView>
        <View className="flex-1 p-8">
          <Text className="text-lg font-semibold my-4 mb-10">
            Please fill out the form below to book an appointment.
          </Text>
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
          <View className="mb-4">
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
          <View className="mb-4">
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
                <Picker.Item label="Select Gender" value="" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
              </Picker>
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
          <View className="flex justify-center mt-5">
            <Text
              onPress={handleSubmit}
              className="text-xl bg-primary text-center text-white border border-primary font-bold py-3 px-4 rounded"
            >
              Submit
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PatientForm;
