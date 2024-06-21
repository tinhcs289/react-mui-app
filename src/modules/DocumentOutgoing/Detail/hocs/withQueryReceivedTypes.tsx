import type { AutoCompleteOption, RHFSelectProps } from '@/components/rhfInputs/RHFSelect';
import arrayOrEmpty from '@/helpers/formatHelpers/arrayOrEmpty';
import useQueryDocumentReceivedType from '@/hooks/useReactQueries/useQueryDocumentReceivedType';
import { useMemo, type ComponentType } from 'react';
export default function withQueryDocumentTypes(
  WrappedComponent: ComponentType<RHFSelectProps>
): ComponentType<RHFSelectProps> {
  return function FieldWithQueryDocumentTypes(props: RHFSelectProps) {
    const { loading: loadingProp, options: _, ...otherProps } = props;
    const { data, isLoading, isFetching } = useQueryDocumentReceivedType();
    const loading = useMemo(
      () => !!isLoading || !!isFetching || !!loadingProp,
      [isLoading, isFetching, loadingProp]
    );
    const options = useMemo(() => {
      return arrayOrEmpty(data).map(
        (receivedType) =>
          ({
            ...receivedType,
            label: `${receivedType?.Name || ''}`.trim(),
            value: `${receivedType?.Id || ''}`,
          }) as AutoCompleteOption
      );
    }, [data]);
    return <WrappedComponent {...otherProps} loading={loading} options={options} />;
  };
}
