import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { MockType, getMock } from "specifics/mocking/utils/api/mock";
import queryKeys from 'commons/utils/queryKeys';

function useGetMockQuery() {
    return useQuery<MockType[], AxiosError>(
        queryKeys.mock,
        getMock,
        {
          onSuccess: (data) => {
            console.log(data);
          },
          onError: (error) => {
            console.log(error);
          },
        }
      );
}

export default useGetMockQuery;