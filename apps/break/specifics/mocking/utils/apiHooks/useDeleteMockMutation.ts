import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import queryKeys from "commons/utils/queryKeys";
import { deleteMock, postMock } from "../api/mock";

function useDeleteMockMutation() {
    const queryClient = useQueryClient();
    return useMutation(deleteMock, {
        onSuccess: async (response) => {
          queryClient.invalidateQueries(queryKeys.mock);
        },
        onError: (error: AxiosError) => {
          alert(error);
        },
    });
}

export default useDeleteMockMutation;