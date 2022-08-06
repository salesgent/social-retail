import useSWR from "swr";
export const useDatafetcher = (URL, ...args) => {
  const { data, error } = useSWR(URL);
  return {
    data: data?.result,
    error,
    loading: !data && !error,
  };
};
