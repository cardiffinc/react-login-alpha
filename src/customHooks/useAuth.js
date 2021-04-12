import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const useAuth = props => {
  console.log(props, "props")
  const currentUser = localStorage.getItem('currentDarthUser');
  const history = useHistory();
  useEffect(() => {
    if (!currentUser) {
      history.push('/login');
    } 
  }, [currentUser]);

  return currentUser;
};

export default useAuth; 