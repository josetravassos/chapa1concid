import React from 'react';
import { useHistory } from 'react-router-dom';

import IntegrantesJson from './lib/integrantes-json';

const IntegranteDetail = (props) => {
  const history = useHistory();
  const url = history.location.pathname;
  console.log('history', history);

  const [integrantes, setIntegrantes] = useState(IntegrantesJson);

  //UseEffect
  useEffect(() => {
    const currentIntegrante = integrantes.filter(
      (stateIntegrante) => stateIntegrante.url === url
    );
    setIntegrante(currentIntegrante[0]);
    console.log(setIntegrantes);
  }, [integrantes, url]);

  // const { person } = props;
  // switch (person) {
  //   case 'author':
  //     return <AuthorLayout>What will you write today?</AuthorLayout>;
  //   case 'admin':
  //     return <AdminLayout>Your latest reports </AdminLayout>;
  //   case 'moderator':
  //     return <ModeratorLayout>Your ongoing events</ModeratorLayout>;
  //   default:
  //     return <GuestLayout>Your current feed</GuestLayout>;
  // }

  return (
    <>
      <div className="integrante-detail-wrapper">
        <h1>sfrfwrfd</h1>
      </div>
    </>
  );
};

export default IntegranteDetail;
