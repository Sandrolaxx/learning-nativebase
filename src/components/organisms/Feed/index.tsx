import { Box, Heading, Icon, Image, Text } from "native-base";
import { UserIcon } from "../../atoms/Icons";

interface FeedProps {
    data: {
        avatarUrl: string
        id: string,
        fullName: string,
        timeStam: string,
        recentText: string
    }
}

export default function Feed({ data }: FeedProps) {
    return (
        <Box flex={1} flexDir="column" marginBottom={4} backgroundColor="#f5f5f5" padding={2} borderRadius={4}  >
            <Box>
                <Image
                    source={{ uri: data.avatarUrl }}
                    width="100%"
                    height={120}
                    alt="Foto do post" />
            </Box>
            <Box marginY={3}>
                <Heading size="sm" paddingBottom={1}>
                    Aprendendo sobre NativeBase
                </Heading>
                <Text numberOfLines={2}>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga
                </Text>
            </Box>

            <Box
                marginY={1}
                flexDir="row"
                backgroundColor="rgb(231, 231, 231)"
                alignSelf="flex-start"
                paddingX={3}
                paddingY={1}
                borderRadius={6}
            >
                <Icon color="#313131" size="md" viewBox="0 0 24 24" marginRight={2} >
                    {UserIcon()}
                </Icon>
                <Text numberOfLines={1}>
                    {data.fullName}
                </Text>
            </Box>

        </Box>
    );
}