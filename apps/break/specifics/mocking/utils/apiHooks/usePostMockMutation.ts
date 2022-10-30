import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import queryKeys from "commons/utils/queryKeys";
import { postMock } from "../api/mock";

function usePostMockMutation() {
    const queryClient = useQueryClient();
    return useMutation(postMock, {
        onSuccess: async (response) => {
          queryClient.invalidateQueries(queryKeys.mock);
        },
        onError: (error: AxiosError) => {
          alert(error);
        },
    });
}

export default usePostMockMutation;