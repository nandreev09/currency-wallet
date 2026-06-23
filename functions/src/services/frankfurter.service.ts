import axios from "axios";

export async function fetchLatestRates(
    base: string
) {
    const { data } = await axios.get(
        "https://api.frankfurter.app/latest",
        {
            params: {
                base,
            },
        }
    );

    return data;
}