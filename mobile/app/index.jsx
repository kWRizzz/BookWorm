import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
        <Text>
            Hello this is the ProtoType Page
        </Text>
        <View>
            <Link 
              href="/(auth)"
            >
              <Text>
                  Login
              </Text>
            </Link>          
        </View>
        <View>
            <Link 
              href="/(auth)/signup"
            >
              <Text>
                  signup
              </Text>
            </Link>          
        </View>
    </View>
  );
}
