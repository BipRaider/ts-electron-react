import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { userOperations, userSelector } from '../redux/user';

export const useRefresh = (): void => {
  const isPrivate: boolean = useSelector(userSelector.isPrivate);
  const dispatch: Dispatch<AnyAction> = useDispatch();

  useEffect(() => {
    if (!isPrivate) {
      userOperations.refresh(dispatch);
    }
  });
};
