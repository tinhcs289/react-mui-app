import localStorageGetItem from '@/helpers/localStorageHelpers/localStorageGetItem';
import localStorageUpdateItem from '@/helpers/localStorageHelpers/localStorageUpdateItem';
import localStorageRemoveItem from '@/helpers/localStorageHelpers/localStorageRemoveItem';
import type { TLsItem } from '@/helpers/localStorageHelpers/_types';

const newLocalStorageItem = <T>(args: { key: string } & Partial<Omit<TLsItem<T>, 'key'>>): TLsItem<T> => {
  return {
    key: args.key,
    get: args?.get || (() => localStorageGetItem(args.key)),
    set: args?.set || ((value: T | null | undefined) => localStorageUpdateItem(args.key, value)),
    clear: args?.clear || (() => localStorageRemoveItem(args.key)),
  };
};
export default newLocalStorageItem;
