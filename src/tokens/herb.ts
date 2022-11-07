import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const HERB = "bb4cfbe0f6be60b80f90f815e8353b93431de4df785d75350b9d214a48455242";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 420000000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, HERB, [
    "addr1qy2cnxeda4f9vh7mvv9hva9hy9as7ssfk2p7ple5tcqm26ymawcvn27w9a2wg5yz8m74zjre8f6cql7zcjjd7ddy9c2qmfl4a9",
    "addr1qyq7x7fhjx00hdk8aqf6tk3rne7yntvvqa73ga40m3g2h59kvtlse3azlfc0xzn33fulpfx2xaljgplruupmuz82kwes7clels",
    "stake1u89tnj258vkk4p9fnd226e7lulh3xh58mvl66uzarzgkrxq7xz24l",
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
