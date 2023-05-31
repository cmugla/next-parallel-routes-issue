import 'server-only';
import { ConditionalRouteRender } from './components/ConditionalRouteRender';

export default function OneLevelLayout({
  breadcrumbs,
  children,
}: {
  breadcrumbs: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <ConditionalRouteRender fallbackChildren={children} paramKey='threeLevel' shouldRenderWhenParamKeyExists={false}>
      {breadcrumbs}
      {children}
    </ConditionalRouteRender>
  )
}
