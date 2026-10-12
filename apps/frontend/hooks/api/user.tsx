import { useQuery } from "@tanstack/react-query";

import { UserApiService } from "@/services";

export const useGetUser = () => {
  const { ...queryProps } = useQuery({
    queryFn: () => UserApiService.getUser(),
    queryKey: ["user"],
    staleTime: 5_000_000,
  });

  return queryProps;
};
