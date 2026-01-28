import {
  View,
  Text,
  TextInput

} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function Login() {
  return (
    <View
      className=" flex-1 justify-center items-center bg-green-100"
    >
      <View
        className=' border border-green-200 shadow-2xl shadow-green-800 h-[39rem] w-[25rem] bg-green-200 rounded-lg p-2 '
      >

        {/* TITLE */}

        <View
          className=' flex flex-row justify-center items-center mt-10'
        >
          <View>
            <Text
              className=' text-5xl font-semibold  text-green-800 mr-7'
            >
              BookWorm
            </Text>
          </View>

          <View>
            <Ionicons name="book" color="green" size={36} />
          </View>
        </View>

        {/* input field */}

        <View>

          {/* FullName */}

          <View
            className=' ml-2'
          >
            <View>
              <Text
                className=' font-semibold text-lg'
              >
                Full Name
              </Text>
            </View>
            <View
              className=' flex flex-row items-center border border-black'
            >
              {/* user logo */}
              <View
                className=' mr-1 '
              >
                <AntDesign name="user" color="" size={24} />
              </View>
              <View>
                <TextInput
                  className=' font-semibold'
                  placeholder='Enter Your Name'
                  autoCapitalize='none'
                />
              </View>
            </View>

          </View>


          {/* Email */}

          <View
            className=' ml-2'
          >
            <View>
              <Text
                className=' font-semibold text-lg'
              >
                Email
              </Text>
            </View>
            <View
              className=' flex flex-row items-center border border-black'
            >
              {/* email logo */}
              <View
                className=' mr-1 '
              >
                <AntDesign name="mail" color="#000" size={24} />
              </View>
              <View>
                <TextInput
                  className=' font-semibold'
                  placeholder='Enter Your Email'
                  keyboardType='email-address'
                  autoCapitalize='none'
                />
              </View>
            </View>

          </View>


          {/* Password */}

          <View
            className=' ml-2'
          >
            <View>
              <Text
                className=' font-semibold text-lg'
              >
                Password
              </Text>
            </View>
            <View
              className=' flex flex-row items-center border border-black'
            >
              {/* user logo */}
              <View
                className=' mr-1 '
              >
                <Ionicons name="lock-closed-outline" color="#000" size={24} />
              </View>
              <View>
                <TextInput
                  className=' font-semibold'
                  placeholder='Enter Your Password'
                  autoCapitalize='none'
                />
              </View>
            </View>

          </View>



        </View>


      </View>
    </View>
  )
}