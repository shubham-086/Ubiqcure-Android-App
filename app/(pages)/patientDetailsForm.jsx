import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import Header from "../../components/Header";

const PatientForm = () => {
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const errors = {};
    if (!patientName) {
      errors.patientName = "Patient name is required";
    }
    if (!age) {
      errors.age = "Age is required";
    }
    if (!gender) {
      errors.gender = "Gender is required";
    }
    if (!phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
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
    <View className="flex-1">
      <Header title={"Patient Information"} />
      <ScrollView>
        <View className="flex-1 p-4">
          {/* <Text className="text-lg font-bold mb-4">Patient Information</Text> */}
          <View className="mb-4">
            <TextInput
              placeholder="Patient Name"
              value={patientName}
              onChangeText={(text) => setPatientName(text)}
              className="text-lg border border-primary p-2 mb-1 rounded-sm bg-white"
              required
            />
            {errors.patientName && (
              <Text style={{ color: "red" }}>{errors.patientName}</Text>
            )}
          </View>
          <View className="mb-4">
            <TextInput
              placeholder="Age"
              value={age}
              keyboardType="numeric"
              maxLength={2}
              inputMode="numeric"
              onChangeText={(text) => {
                setAge(text);
                setErrors(...errors, (errors.patientName = ""));
              }}
              className="text-lg border border-primary p-2 mb-1 rounded-sm bg-white"
              required
            />
            {errors.age && <Text style={{ color: "red" }}>{errors.age}</Text>}
          </View>
          <View className="mb-4">
            <View className="text-lg border border-primary mb-1 rounded-sm bg-white">
              <Picker
                selectedValue={gender}
                onValueChange={(itemValue) => setGender(itemValue)}
                style={{ margin: 0, height: 50 }}
                required
              >
                <Picker.Item label="Select Gender" value="" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
              </Picker>
            </View>
            {errors.gender && (
              <Text style={{ color: "red" }}>{errors.gender}</Text>
            )}
          </View>
          <View className="mb-4">
            <TextInput
              placeholder="Phone Number"
              value={phoneNumber}
              keyboardType="numeric"
              inputMode="numeric"
              maxLength={2}
              onChangeText={(text) => setPhoneNumber(text)}
              className="text-lg border border-primary p-2 mb-1 rounded-sm bg-white"
              required
            />
            {errors.phoneNumber && (
              <Text style={{ color: "red" }}>{errors.phoneNumber}</Text>
            )}
          </View>
          <View className="mb-4">
            <TextInput
              placeholder="Email (optional)"
              value={email}
              onChangeText={(text) => setEmail(text)}
              className="text-lg border border-primary p-2 mb-1 rounded-sm bg-white"
            />
          </View>
          <View className="flex justify-center">
            <Text
              onPress={handleSubmit}
              className="text-xl bg-blue-500 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
