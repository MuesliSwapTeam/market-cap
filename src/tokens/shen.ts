import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const SHEN = "8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd615368656e4d6963726f555344";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = Number(1_000_000_000_000n);
  const treasury = Number(await getAmountInAddresses(blockFrost, SHEN, [
    "addr1zxgm7n8v4ulr2df0rhmvcduxlh5sp6na7hsd33f4cf4xv6gm5kjdmrpmng059yellupyvwgay2v0lz6663swmds7hp0qnsm3vx", // treasury
  ])) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
