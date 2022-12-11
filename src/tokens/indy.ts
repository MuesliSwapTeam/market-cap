import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAxiosInstance } from "../utils";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const axios = getAxiosInstance(options);
  const total = 35_000_000;
  const circulating: number = await axios
    .get("https://analytics.indigoprotocol.io/api/stats/indy-circulating-supply")
    .then((res) => res.data.circulatingSupply / 1e6);
  return {
    circulating: circulating.toString(),
    total: total.toString(),
  };
};

export default fetcher;
