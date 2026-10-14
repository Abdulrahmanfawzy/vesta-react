import apiClient from "@/lib/axios";

import type {
  OverviewApiResponse,
  OverviewApiData,
} from "../types/overview.types";

export const overviewService = {
  async getOverview(): Promise<OverviewApiData> {
    const response = await apiClient.get<OverviewApiResponse>(
      "overview",
    );

    if (!response.data.success) {
      throw new Error(
        response.data.message || "Failed to retrieve overview data",
      );
    }

    return response.data.data;
  },
};
