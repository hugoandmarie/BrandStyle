import { createClient } from "@sanity/client";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET;
const readToken = import.meta.env.SANITY_API_READ_TOKEN;

const isPreview =
    import.meta.env.SANITY_PREVIEW === "true";

if (!projectId) {
    throw new Error(
        "Missing PUBLIC_SANITY_PROJECT_ID environment variable."
    );
}

if (!dataset) {
    throw new Error(
        "Missing PUBLIC_SANITY_DATASET environment variable."
    );
}

if (isPreview && !readToken) {
    throw new Error(
        "SANITY_PREVIEW is enabled, but SANITY_API_READ_TOKEN is missing."
    );
}

export const sanityClient = createClient({
    projectId,
    dataset,

    apiVersion: "2026-08-21",

    useCdn: false,

    perspective: isPreview
        ? "drafts"
        : "published",

    token: isPreview
        ? readToken
        : undefined,
});