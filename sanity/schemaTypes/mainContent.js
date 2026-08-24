import {
    defineType,
    defineField,
    defineArrayMember
} from "sanity";

export const mainContent = defineType({
    name: "mainContent",
    title: "Main Website Content",
    type: "document",

    description:
        "Manage the primary editable content shown across the website.",

    groups: [
        {
            name: "hero",
            title: "Hero",
            default: true,
        },
        {
            name: "services",
            title: "Services",
        },
        {
            name: "podcast",
            title: "Podcast",
        },
        {
            name: "visibility",
            title: "Visibility Advantage",
        },
        {
            name: "contact",
            title: "Contact",
        },
        {
            name: "footer",
            title: "Footer",
        },
    ],

    fields: [
        // HERO
        defineField({
            name: "heroText",
            title: "Main Heading",
            type: "string",
            group: "hero",
            description:
                "The large heading displayed in the main hero section.",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "orgDesc",
            title: "Introductory Description",
            type: "text",
            rows: 4,
            group: "hero",
            description:
                "Short description displayed beneath the main heading.",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "learnMoreLink",
            title: "Learn More Link",
            type: "url",
            group: "hero",
            description:
                'Destination for the "Learn More" link in the hero section.',
        }),

        // SERVICES
        defineField({
            name: "servicesImages",
            title: "Service Cards",
            type: "array",
            group: "services",
            description:
                "Add, remove, or reorder the services displayed on the website.",

            validation: (Rule) => Rule.min(1),

            of: [
                defineArrayMember({
                    name: "serviceItem",
                    title: "Service",
                    type: "object",

                    fields: [
                        defineField({
                            name: "image",
                            title: "Image",
                            type: "image",
                            options: {
                                hotspot: true,
                            },
                            description:
                                "Image displayed with this service.",
                            validation: (Rule) => Rule.required(),
                        }),

                        defineField({
                            name: "text",
                            title: "Service Name",
                            type: "string",
                            description:
                                'For example: "Brand Positioning".',
                            validation: (Rule) => Rule.required(),
                        }),
                    ],

                    preview: {
                        select: {
                            title: "text",
                            media: "image",
                        },
                    },
                }),
            ],
        }),

        defineField({
            name: "founderStatement",
            title: "Founder Statement",
            type: "array",
            group: "services",

            of: [
                defineArrayMember({
                    type: "object",
                    name: "textSegment",
                    title: "Text",

                    fields: [
                        defineField({
                            name: "text",
                            title: "Text",
                            type: "string",
                        }),
                    ],

                    preview: {
                        select: {
                            title: "text",
                        },
                    },
                }),

                defineArrayMember({
                    type: "image",
                    name: "inlineImage",
                    title: "Image",
                }),
            ],
        }),

        // PODCAST
        defineField({
            name: "podcastImage",
            title: "Podcast Thumbnail",
            type: "image",
            group: "podcast",
            description:
                "Thumbnail shown in the podcast card.",
            options: {
                hotspot: true,
            },
        }),

        defineField({
            name: "podcastDesc1",
            title: "Podcast Intro",
            type: "text",
            rows: 3,
            group: "podcast",
            description:
                "Short introductory text for the podcast section.",
        }),

        defineField({
            name: "podcastDesc2",
            title: "Podcast Description",
            type: "text",
            rows: 5,
            group: "podcast",
            description:
                "Longer supporting description for the podcast.",
        }),

        defineField({
            name: "spotifyLink",
            title: "Spotify URL",
            type: "url",
            group: "podcast",
            description:
                "Link to the podcast on Spotify.",
        }),

        defineField({
            name: "appleLink",
            title: "Apple Podcasts URL",
            type: "url",
            group: "podcast",
            description:
                "Link to the podcast on Apple Podcasts.",
        }),

        // VISIBILITY ADVANTAGE
        defineField({
            name: "visibilityAdvDesc",
            title: "Section Description",
            type: "text",
            rows: 5,
            group: "visibility",
            description:
                "Main description displayed in the Visibility Advantage section.",
        }),

        defineField({
            name: "visibilityAdvImages",
            title: "Visibility Advantage Cards",
            type: "array",
            group: "visibility",
            description:
                "Add, remove, or reorder the cards shown in this section.",

            of: [
                defineArrayMember({
                    name: "visibilityAdvantageItem",
                    title: "Visibility Advantage Card",
                    type: "object",

                    fields: [
                        defineField({
                            name: "image",
                            title: "Image",
                            type: "image",
                            options: {
                                hotspot: true,
                            },
                            validation: (Rule) => Rule.required(),
                        }),

                        defineField({
                            name: "text",
                            title: "Card Title",
                            type: "string",
                            description:
                                'For example: "Authority" or "Clarity".',
                            validation: (Rule) => Rule.required(),
                        }),
                    ],

                    preview: {
                        select: {
                            title: "text",
                            media: "image",
                        },
                    },
                }),
            ],
        }),

        defineField({
            name: "purchaseLink",
            title: "Purchase URL",
            type: "url",
            group: "visibility",
            description:
                "Destination for the purchase call-to-action.",
        }),

        // CONTACT
        defineField({
            name: "contactText",
            title: "Contact Message",
            type: "text",
            rows: 3,
            group: "contact",
            description:
                "Call-to-action text displayed in the contact section.",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "contactLink",
            title: "Contact Link",
            type: "url",
            group: "contact",
            description:
                "Destination for the contact call-to-action.",
        }),

        // FOOTER
        defineField({
            name: "instagramLink",
            title: "Instagram Link",
            type: "url",
            group: "footer",
            description:
                "URL to Instagram",
        }),

        defineField({
            name: "facebookLink",
            title: "Facebook Link",
            type: "url",
            group: "footer",
            description:
                "URL to Facebook",
        }),

        defineField({
            name: "linkedinLink",
            title: "LinkedIn Link",
            type: "url",
            group: "footer",
            description:
                "URL to LinkedIn",
        }),

        defineField({
            name: "addressText",
            title: "Office Address",
            type: "string",
            group: "footer",
            description:
                "Address displayed in the website footer.",
        }),
    ],

    preview: {
        prepare() {
            return {
                title: "Main Website Content",
                subtitle: "Edit content displayed on homepage",
            };
        },
    },
});