import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const SHEN = "8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd615368656e4d6963726f555344";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = Number(1_000_000_000_000n);
  const treasury = Number(await getAmountInAddresses(blockFrost, SHEN, [
    "addr1z8297ay4dlcdngmat86080adn8f8jlvveammehrunpx60aqm5kjdmrpmng059yellupyvwgay2v0lz6663swmds7hp0qnm8ly0", // treasury
  ])) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
