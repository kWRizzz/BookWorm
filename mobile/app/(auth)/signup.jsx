import {
  View,
  Text,
  TextInput,
  TouchableOpacity

} from 'react-native'
import { Link } from "expo-router";
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

        <View
          className='mt-[5rem]'
        >



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

        {/* Submit Button */}

        <View
          className=' flex justify-center items-center mt-5'
        >
          <TouchableOpacity
            className=' flex justify-center items-center bg-green-700 h-9 w-[5rem] rounded-lg'
          >
            <Text>
                Submit
            </Text>
          </TouchableOpacity>
        </View>

        {/* link For Login */}

        <View
          className='mt-5 flex justify-center items-center'
        >
          <View
            className=' flex flex-row'
          >
              <Text
                className=' text-sm'
              >
                  Don't Have An Account?   
              </Text>
              <Link 
              href="/(auth)"
            >
              <Text
                className=' text-sm font-semibold text-green-500'
              >
                    Login
              </Text>
            </Link>   
          </View>
        </View>

      </View>
    </View>
  )
}