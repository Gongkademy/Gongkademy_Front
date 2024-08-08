import { getMemberInfo } from "@apis/members/membersApi";
import { useQuery } from "@tanstack/react-query";

export const useMemberInfoQuery = () =>
  useQuery({
    queryKey: ["memberInfo"],
    queryFn: getMemberInfo,
  });
