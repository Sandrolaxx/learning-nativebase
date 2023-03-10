import { Avatar, Box, HStack, Icon } from "native-base";
import { Pressable } from "react-native";
import { BellIcon, HamburgerIcon } from "../components/atoms/Icons";

export default function Home() {
    return (
        <Box flex={1} bg="blue.100" flexDirection="column" >
            <HStack space={4} padding={4} width="100%" alignItems="center" justifyContent="space-between" safeArea>
                <Box>
                    <Pressable>
                        <Icon color="#797979" size="3xl" viewBox="0 0 24 24">
                            {HamburgerIcon()}
                        </Icon>
                    </Pressable>
                </Box>
                <Box flexDir="row" alignItems="center">
                    <Pressable>
                        <Icon marginRight={2} color="#797979" size="3xl" viewBox="0 0 24 24">
                            {BellIcon()}
                        </Icon>
                    </Pressable>
                    <Pressable>
                        <Avatar
                            source={{ uri: "https://avatars.githubusercontent.com/u/61207420" }}
                            height={12}
                            width={12}
                        />
                    </Pressable>
                </Box>
            </HStack>
        </Box>
    );
}