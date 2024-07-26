import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
const { height, width } = Dimensions.get("window");

const doctorList = [
  {
    id: 1,
    name: "Dr. Rohan Gupta",
    speciality: "Cardiologist",
    experience: 10,
    location: "New Delhi",
    image:
      "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg",
    qualification: "MBBS, MD (Cardiology)",
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    speciality: "Dermatologist",
    experience: 8,
    location: "Mumbai",
    image:
      "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg",
    qualification: "MBBS, MD (Dermatology)",
  },
  {
    id: 3,
    name: "Dr. Karan Singh",
    speciality: "Orthopedic Surgeon",
    experience: 12,
    location: "Bangalore",
    image:
      "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg",
    qualification: "MBBS, MS (Orthopedics)",
  },
  {
    id: 4,
    name: "Dr. Nisha Jain",
    speciality: "Gynecologist",
    experience: 9,
    location: "Chennai",
    image:
      "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg",
    qualification: "MBBS, MD (Gynecology)",
  },
  {
    id: 5,
    name: "Dr. Rajesh Kumar",
    speciality: "General Physician",
    experience: 15,
    location: "Hyderabad",
    image:
      "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg",
    qualification: "MBBS, MD (General Medicine)",
  },
];

const CardItem = ({ item }) => {
  return (
    <View
      className="flex-1 justify-center items-center"
      style={{ width: width - 16 }}
    >
      <TouchableOpacity
        activeOpacity={0.9}
        className="flex-row p-4 rounded-lg border border-gray-100 bg-gray-50 shadow w-11/12"
      >
        <Image
          source={{ uri: item.image }}
          className="rounded-full w-24 h-24"
          resizeMode="contain"
          style={{ borderColor: "#FFFFFF", borderWidth: 1 }}
        />
        <View className="flex-1 ml-5 ">
          <Text className="text-slate-700 text-xl font-bold">
            Dr. {item.name}
          </Text>
          <Text className="text-slate-700">{item.speciality}</Text>
          <Text className="text-slate-700">
            {item.experience} years experience
          </Text>
          <Text className="text-slate-700">{item.location}</Text>
          {/* <Text className="text-gray-500">{item.qualification}</Text> */}
          <View className="mt-2">
            <Text className="px-2 py-1 border border-primary text-primary rounded-md inline-flex self-start">
              Book Appointment
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const FeaturedDoctors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View className="flex-1 justify-center items-center">
      <View
        className="justify-center items-center"
        // style={{ height: height / 2 + 100 }}
      >
        <FlatList
          data={doctorList}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={(e) => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex((x / width).toFixed(0));
          }}
          horizontal
          renderItem={({ item }) => <CardItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View className="flex-row w-full justify-center items-center mt-1 mb-5">
        {doctorList.map((item, index) => {
          return (
            <View
              key={item.id}
              className={`${
                currentIndex == index ? "w-5 h-2.5" : "w-2 h-2"
              } rounded-full ${
                currentIndex == index ? "bg-gray-50" : "bg-gray-50"
              } mx-1`}
            ></View>
          );
        })}
      </View>
    </View>
  );
};

export default FeaturedDoctors;
