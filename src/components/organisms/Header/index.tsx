import { Avatar, Box, HStack, Icon } from "native-base";
import { Pressable } from "react-native";
import { BellIcon, HamburgerIcon } from "../../atoms/Icons";

export default function Header() {
    return (
        <HStack
            space={4}
            padding={4}
            width="100%"
            alignItems="center"
            justifyContent="space-between"
            safeArea>
            <Box>
                <Pressable>
                    <Icon color="#313131" size="xl" viewBox="0 0 24 24">
                        {HamburgerIcon()}
                    </Icon>
                </Pressable>
            </Box>
            <Box flexDir="row" alignItems="center">
                <Pressable>
                    <Icon marginRight={2} color="#313131" size="xl" viewBox="0 0 24 24">
                        {BellIcon()}
                    </Icon>
                </Pressable>
                <Pressable>
                    <Avatar
                        source={{ uri: 'https://avatars.githubusercontent.com/u/61207420' }}
                        height={10}
                        width={10}
                    />
                </Pressable>
            </Box>
        </HStack>
    );
}
