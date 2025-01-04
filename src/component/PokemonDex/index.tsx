import { useQuery } from "@tanstack/react-query";
import { initAxios } from "utils/fetch";
import queryKeys from "utils/queryKeys";
import { LogServiceType } from "utils/types";
import View from "./view";

interface PokemonDexProps {
    name: string,
    url: string,
}
const PokemonDex = ({
    name,
    url
}: PokemonDexProps) => {

    const fetchPokemonInfo = async () => {
        let responseData = [];
        const pokemonIconAxios = initAxios(LogServiceType.POKEMON);

        const infoResponse = await pokemonIconAxios.get(
            url,
            {
                headers: {
                  'Content-Type': 'application/json',
                },
              }
        );

        if(infoResponse.data) {
            responseData = infoResponse.data;
        }

        return responseData;
    }

    const {data, isSuccess, isError, error } = useQuery({
        queryKey: [queryKeys.POKEMON_INFO],
        queryFn: fetchPokemonInfo,
        retry: 1,
        throwOnError: (error, query) => {
            // if (error) {
            //     console.error("Network Error:", error);
            //     return true;
            // }
            console.warn("Other Error:", error);
            return false;
        },
    });

    if (isError) {
        // return <ErrorComponent message="Failed to load Pokemon info" />;
        return <span>"Error Fetching Pokemon Info"</span>
    }

    return (
        <View data={data} name={name} iconUrl={url} />
    );
}

export default PokemonDex;