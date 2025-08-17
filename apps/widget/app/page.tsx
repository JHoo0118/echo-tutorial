"use client";

import { WidgetView } from "@/modules/widget/ui/views/widget-view";

interface PageProps {
  searchParams: Promise<{
    organizationId: string;
  }>;
}

const Page = async ({ searchParams }: PageProps) => {
  const { organizationId } = await searchParams;

  return <WidgetView organizationId={organizationId} />;
};

export default Page;
