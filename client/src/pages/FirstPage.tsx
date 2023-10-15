import { FC, useEffect, useState } from 'react';
import { useMutation, gql, useQuery } from '@apollo/client';
// import axios from 'axios';
// import { GET_PERSON } from '../apiQuery/get_constant';

interface FirstPageProps {}

const GET_PERSON = gql`
  query {
    getAllPerson {
      id
      name
    }
  }
`;

export const FirstPage: FC<FirstPageProps> = () => {
  const { loading, error, data } = useQuery(GET_PERSON);
  const [person, setPerson] = useState([{ name: '' }]);
  // console.log(error);

  // 로컬 CORS 확인용
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5001/');
  //       console.log(response.status);
  //     } catch (e) {}
  //   })();
  // }, []);

  useEffect(() => {
    if (data) {
      const { getAllPerson } = data;
      setPerson(getAllPerson);
    }
  }, [data]);

  console.log(person);

  if (person && person.length > 0) {
    return (
      <div>
        {person.map((v, i) => {
          return <div key={i}>{v.name}</div>;
        })}
      </div>
    );
  }

  return <div>데이터 X</div>;
};
