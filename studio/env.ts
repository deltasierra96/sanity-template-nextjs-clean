export const apiVersion =
  process.env.SANITY_API_VERSION || "2024-10-14";

export const dataset = assertValue(
  process.env.SANITY_STUDIO_DATASET,
  "Missing environment variable: SANITY_STUDIO_DATASET",
);

export const projectId = assertValue(
  process.env.SANITY_STUDIO_PROJECT_ID,
  "Missing environment variable: SANITY_STUDIO_PROJECT_ID",
);

export const previewUrl = assertValue(
  process.env.SANITY_STUDIO_PREVIEW_URL,
  "Missing environment variable: SANITY_STUDIO_PREVIEW_URL",
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
