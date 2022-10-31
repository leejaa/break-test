import { Button, TextField } from '@mui/material';
import { Button as ButtonComponent } from 'break-ui/components';
import { useState } from 'react';
import usePatchMockMutation from 'specifics/mocking/utils/apiHooks/usePatchMockMutation';
import usePostMockMutation from 'specifics/mocking/utils/apiHooks/usePostMockMutation';
import useDeleteMockMutation from '../specifics/mocking/utils/apiHooks/useDeleteMockMutation';
import useGetMockQuery from '../specifics/mocking/utils/apiHooks/useGetMockQuery';

export default function Break() {
  const { data } = useGetMockQuery();
  const { mutate } = usePostMockMutation();
  const { mutate: deleteMutate } = useDeleteMockMutation();
  const { mutate: updateMutate } = usePatchMockMutation();

  const [deleteId, setDeleteId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const [updateId, setUpdateId] = useState('');
  const [updateName, setUpdateName] = useState('');
  const [updateAge, setUpdateAge] = useState('');
  const [updateGender, setUpdateGender] = useState('');

  const handleChangeId = (event: any) => {
    setDeleteId(event.target.value);
  };

  const handleChangeName = (event: any) => {
    setName(event.target.value);
  };

  const handleChangeAge = (event: any) => {
    setAge(event.target.value);
  };

  const handleChangeGender = (event: any) => {
    setGender(event.target.value);
  };

  const handleChangeUpdateId = (event: any) => {
    setUpdateId(event.target.value);
  };

  const handleChangeUpdateName = (event: any) => {
    setUpdateName(event.target.value);
  };

  const handleChangeUpdateAge = (event: any) => {
    setUpdateAge(event.target.value);
  };

  const handleChangeUpdateGender = (event: any) => {
    setUpdateGender(event.target.value);
  };

  const handleClick = () => {
    mutate({
      age,
      gender,
      name,
    });
  };

  const handleClickUpdate = () => {
    updateMutate({
      id: updateId,
      age: updateAge,
      gender: updateGender,
      name: updateName,
    });
  };

  const handleDelete = () => {
    deleteMutate(deleteId);
  };

  return (
    <div>
      <h1>Break</h1>
      <ButtonComponent />
      <div>
        <h2>데이터 추가</h2>
        <TextField
          placeholder="name"
          value={name}
          onChange={handleChangeName}
        />
        <TextField placeholder="age" value={age} onChange={handleChangeAge} />
        <TextField
          placeholder="gender"
          value={gender}
          onChange={handleChangeGender}
        />
        <Button onClick={handleClick}>추가</Button>
      </div>
      <div>
        <h2>데이터 삭제</h2>
        <TextField
          placeholder="id"
          value={deleteId}
          onChange={handleChangeId}
        />
        <Button onClick={handleDelete}>삭제</Button>
      </div>
      <div>
        <h2>데이터 수정</h2>
        <TextField
          placeholder="id"
          value={updateId}
          onChange={handleChangeUpdateId}
        />
        <TextField
          placeholder="updateName"
          value={updateName}
          onChange={handleChangeUpdateName}
        />
        <TextField
          placeholder="updateAge"
          value={updateAge}
          onChange={handleChangeUpdateAge}
        />
        <TextField
          placeholder="updateGender"
          value={updateGender}
          onChange={handleChangeUpdateGender}
        />
        <Button onClick={handleClickUpdate}>수정</Button>
      </div>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
