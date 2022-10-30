import client from "commons/utils/client";

export const MOCK_PROPERTY = {
    id: 'id',
    name: 'name',
    age: 'age',
    gender: 'gender'
};

export interface MockType {
    id?: string;
    name: string;
    age: string;
    gender: string;
}

export async function getMock() {
  const { data } = await client.get<MockType[]>('/api/mock');
  return data;
}

export async function postMock(params: MockType) {
    const { data } = await client.post<MockType>('/api/mock', params);
    return data;
}

export async function deleteMock(id: string) {
    const { data } = await client.delete(`/api/mock/${id}`);
    return data;
}

export async function patchMock(params: { id: string } & Partial<MockType>) {
    const { id } = params;
    const { data } = await client.patch(`/api/mock/${id}`, params);
    return data;
}