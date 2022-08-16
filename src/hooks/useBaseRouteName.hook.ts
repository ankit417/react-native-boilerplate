import {useRoute} from '@react-navigation/native';

const useBaseRouteName = () => {
  const routeName = useRoute().name;
  return routeName.split('_')[0];
};

export {useBaseRouteName};
