'use client';

import { useParams } from 'next/navigation';

type ConditionalRouteRenderProps = {
  /**
   * shouldRenderWhenParamKeyExists tells the component that when the route's paramKey
   * exists in the list of params, then the children should be rendered
   */
  shouldRenderWhenParamKeyExists: boolean;
  /**
   * paramKey is the name of the route param in the URL to check if it exists
   */
  paramKey: string;
  /**
   * The children to be rendered, when determined so
   */
  children: React.ReactNode;
  /**
   * The children that should be passed through when the conditional logic
   * determines not to render children
   */
  fallbackChildren: React.ReactNode;
};

export const ConditionalRouteRender = ({
  shouldRenderWhenParamKeyExists,
  paramKey,
  children,
  fallbackChildren,
}: ConditionalRouteRenderProps) => {
  const params = useParams();
  const doesParamKeyExist = params?.[paramKey];

  if (shouldRenderWhenParamKeyExists) {
    if (doesParamKeyExist) {
      return <>{children}</>;
    }

    return <>{fallbackChildren}</>;
  }

  if (doesParamKeyExist) {
    return <>{fallbackChildren}</>;
  }

  return <>{children}</>;
};