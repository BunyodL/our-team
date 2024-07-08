import { setIsMobile } from '../redux/reducers/screenSlice';
import { useAppDispatch } from '../redux/store';

export const useDefineScreenType = () => {
  const dispatch = useAppDispatch();
  const defineScreenType = () => dispatch(setIsMobile(window.innerWidth <= 630));

  return () => {
    window.addEventListener('load', defineScreenType);
    window.addEventListener('resize', defineScreenType);
    window.addEventListener('click', defineScreenType);
    return () => {
      window.removeEventListener('load', defineScreenType);
      window.removeEventListener('resize', defineScreenType);
      window.removeEventListener('click', defineScreenType);
    };
  };
};
