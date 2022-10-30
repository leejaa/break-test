import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import queryKeys from "commons/utils/queryKeys";
import { patchMock, postMock } from "../api/mock";

function usePatchMockMutation() {
    const queryClient = useQueryClient();
    return useMutation(patchMock, {
        onSuccess: async (response) => {
          queryClient.invalidateQueries(queryKeys.mock);
        },
        onError: (error: AxiosError) => {
          alert(error);
        },
    });
}

export default usePatchMockMutation;