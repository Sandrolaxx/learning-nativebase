import { Box, Image } from "native-base";

interface StoriesProps {
    avatarUrl: string
}

export default function Stories({ avatarUrl }: StoriesProps) {
    return (
        <Box flex={1} marginBottom={4} paddingRight={4} borderRadius={4} >
            <Box padding={0.5} borderRadius={32} bg={{
                linearGradient: {
                    colors: ["#8ef6fa", "#005d9b"]
                }
            }}>
                <Image
                    source={{ uri: avatarUrl }}
                    width={16}
                    height={16}
                    borderRadius={32}
                    alt="Foto de perfil" />
            </Box>
        </Box>
    );
}