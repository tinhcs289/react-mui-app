import GoogleMap, { GoogleMapMarker } from '@/components/GoogleMap';
import CommonAvatar from '@/components/media/CommonAvatar';
import images from '@/constants/images';
import wait from '@/functions/wait';
import { lazy } from 'react';
const DashboardTabsContainer = lazy(() => wait(0).then(() => import('@/containers/DashboardTabsContainer')));
export default function DemoFormPage() {
  return (
    <DashboardTabsContainer>
      <GoogleMap>
        <GoogleMapMarker lat={21.043414199999997} lng={105.82113869999999}>
          <CommonAvatar src={images.mockAvatar} style={{ width: '50px', height: '50px' }} />
        </GoogleMapMarker>
      </GoogleMap>
    </DashboardTabsContainer>
  );
}
