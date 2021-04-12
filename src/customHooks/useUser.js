import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const useUser = () => {
  const currentUser = localStorage.getItem('currentDarthUser');
  const history = useHistory();
  useEffect(() => {
    if (currentUser) {
      history.push('/');
    } 
  }, [currentUser]);

  return currentUser;
};

export default useUser; 