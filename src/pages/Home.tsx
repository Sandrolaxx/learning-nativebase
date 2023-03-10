import { Box } from "native-base";
import { FlatList } from "react-native";
import Feed from "../components/organisms/Feed";
import Header from "../components/organisms/Header";
import PostHeader from "../components/organisms/Stories";

export default function Home() {
    const data = [
        {
            id: "c77dac51-44f6-4c40-a570-37aacece997b",
            fullName: "Manuel Gomes",
            timeStam: "12:45 PM",
            recentText: "Good day!",
            avatarUrl: "https://imagens.ne10.uol.com.br/img/imagens/2019/10/28/3436bab7a3_sfdfsdfsdfsdfs.jpg"
        },
        {
            id: "c77dac51-44f6-4c40-a570-37aacece9123",
            fullName: "GigaChad da Silva",
            timeStam: "12:45 PM",
            recentText: "Good day!",
            avatarUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.5o1z-jBWL4P87en36GtubQHaI6%26pid%3DApi&f=1&ipt=ad5410b41e8a00e6aa960d8643d8293c48b080e5393e295b39ac3ba275ad764c&ipo=images"
        },
        {
            id: "c77dac51-44f6-4c40-a570-37aacece9111",
            fullName: "Melon Musk",
            timeStam: "12:45 PM",
            recentText: "Good day!",
            avatarUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fntou2l6so6621.png%3Fwidth%3D960%26crop%3Dsmart%26auto%3Dwebp%26s%3Db68f03eac1b410cc2f2ed362527c428f8128d779&f=1&nofb=1&ipt=9093c54f8d20aa886e16143673d43c4dddac873f5e31d68c8d0e6b52b55916b7&ipo=images"
        },
        {
            id: "c77dac51-44f6-4c40-a570-37aacece9121",
            fullName: "DuckDuckGO",
            timeStam: "12:45 PM",
            recentText: "Good day!",
            avatarUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F_6qghjuGwnpg%2FTPCfBgerMnI%2FAAAAAAAAAFo%2FJ9IzBs0ogB0%2Fs1600%2FDomestic%2BDuck.JPG&f=1&nofb=1&ipt=f9ddb728cda3267c7545c15aaa622494adc3754df80197e8719cc7defd871002&ipo=images"
        },
        {
            id: "c77dac51-44f6-4c40-a570-37aacece9129",
            fullName: "GigaChad da Silva",
            timeStam: "12:45 PM",
            recentText: "Good day!",
            avatarUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.5o1z-jBWL4P87en36GtubQHaI6%26pid%3DApi&f=1&ipt=ad5410b41e8a00e6aa960d8643d8293c48b080e5393e295b39ac3ba275ad764c&ipo=images"
        }
    ]

    return (
        <Box flex={1} bg="blue.100" flexDirection="column" >
            <Header />

            <Box paddingX={4}>
                <FlatList
                    horizontal={true}
                    data={data}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (<PostHeader avatarUrl={item.avatarUrl} />)}
                />
            </Box>

            <Box paddingX={4}>
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (<Feed data={item} />)}
                />
            </Box>
        </Box>
    );
}