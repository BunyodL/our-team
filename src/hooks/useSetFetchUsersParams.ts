import { setPageParam, setPerPageParam } from '../redux/reducers/teamSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';

export const useSetFetchUsersParams = () => {
  const dispatch = useAppDispatch();

  const { isMobile } = useAppSelector((s) => s.screen);

  return {
    setFetchUsersParams: () => {
      if (isMobile) {
        dispatch(setPerPageParam(4));
      } else {
        // диспатчим setPageParam для избежания бага, когда мы в мобильном
        // расширении находимся на 3 странице и меняем расширение экрана,
        // так как в десктопном расширении у нас только 2 страницы
        dispatch(setPageParam(1));

        dispatch(setPerPageParam(8));
      }
    },
    isMobile,
  };
};
