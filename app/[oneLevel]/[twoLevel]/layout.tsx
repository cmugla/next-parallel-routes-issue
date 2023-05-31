import 'server-only';
import { ConditionalRouteRender } from '../components/ConditionalRouteRender';

export default function TwoLevelLayout({
  nestedBreadcrumbs,
  children,
}: {
  children: React.ReactNode;
  nestedBreadcrumbs: React.ReactNode;
}) {
  return (
    <ConditionalRouteRender paramKey='threeLevel' shouldRenderWhenParamKeyExists={true} fallbackChildren={children}>
      {nestedBreadcrumbs}
      {children}
    </ConditionalRouteRender>
  )
}
 