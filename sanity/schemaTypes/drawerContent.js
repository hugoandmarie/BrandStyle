import {
    defineType,
    defineField,
    defineArrayMember
} from "sanity";

export const drawerContent = defineType({
    name: "drawerContent",
    title: "Drawer Content",
    type: "document",

    description:
        "Manage the content displayed inside the website navigation drawers.",

    groups: [
        {
            name: "about",
            title: "About",
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
            name: "toolkit",
            title: "Toolkit",
        },
        {
            name: "contact",
            title: "Contact",
        },
    ],

    fields: [

        // =====================================================
        // ABOUT
        // =====================================================

        defineField({
            name: "aboutMainText",
            title: "Main Introduction",
            type: "text",
            rows: 6,
            group: "about",
            description:
                "Main introductory text displayed when the About drawer opens.",
        }),

        defineField({
            name: "aboutMissionText",
            title: "Our Mission",
            type: "text",
            rows: 6,
            group: "about",
            description:
                'Text displayed beneath the "Our Mission" heading.',
        }),

        defineField({
            name: "aboutServicesText",
            title: "Services Introduction",
            type: "text",
            rows: 6,
            group: "about",
            description:
                "Introductory text shown above the expandable service list.",
        }),

        defineField({
            name: "aboutCollapsibleContent",
            title: "Service Details",
            type: "array",
            group: "about",
            description:
                "Expandable service sections shown in the About drawer. Drag items to reorder them.",

            of: [
                defineArrayMember({
                    name: "aboutServiceItem",
                    title: "Service",
                    type: "object",

                    fields: [
                        defineField({
                            name: "title",
                            title: "Service Title",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),

                        defineField({
                            name: "description",
                            title: "Description",
                            type: "text",
                            rows: 5,
                            validation: (Rule) => Rule.required(),
                        }),
                    ],

                    preview: {
                        select: {
                            title: "title",
                            subtitle: "description",
                        },
                    },
                }),
            ],
        }),

        defineField({
            name: "aboutFounderImage",
            title: "Founder Image",
            type: "image",
            group: "about",
            description:
                "Image shown in the founder section of the About drawer.",
            options: {
                hotspot: true,
            },
        }),

        defineField({
            name: "aboutFounderText",
            title: "Founder Biography",
            type: "text",
            rows: 8,
            group: "about",
            description:
                "Biography shown in the founder section of the About drawer.",
        }),

        defineField({
            name: "aboutPodcastText",
            title: "Podcast Text",
            type: "array",
            group: "about",
            description:
                "Paragraphs used for the podcast section within the About detail view.",

            of: [
                defineArrayMember({
                    type: "text",
                    rows: 4,
                }),
            ],
        }),

        defineField({
            name: "aboutVisibilityAdvText",
            title: "Visibility Advantage Text",
            type: "array",
            group: "about",
            description:
                "Paragraphs describing The Visibility Advantage inside the About detail view.",

            of: [
                defineArrayMember({
                    type: "text",
                    rows: 4,
                }),
            ],
        }),


        // =====================================================
        // SERVICES
        // =====================================================

        defineField({
            name: "servicesMainText",
            title: "Main Introduction",
            type: "text",
            rows: 6,
            group: "services",
            description:
                "Main introductory copy displayed when the Services drawer opens.",
        }),

        defineField({
            name: "servicesClientsText",
            title: "Clients Text",
            type: "text",
            rows: 5,
            group: "services",
            description:
                "Copy describing Brandstyle's clients.",
        }),

        defineField({
            name: "servicesSubText",
            title: "Services Subtext",
            type: "text",
            rows: 5,
            group: "services",
            description:
                "Supporting text displayed within the Services drawer.",
        }),

        defineField({
            name: "servicesCollapsibleContent",
            title: "Services Collapsible Content",
            type: "array",
            group: "services",
            description:
                "Expandable service sections. Drag items to change their display order.",

            of: [
                defineArrayMember({
                    name: "servicesItem",
                    title: "Services",
                    type: "object",

                    fields: [
                        defineField({
                            name: "title",
                            title: "Service Name",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),

                        defineField({
                            name: "description",
                            title: "Description",
                            type: "text",
                            rows: 5,
                            validation: (Rule) => Rule.required(),
                        }),
                    ],

                    preview: {
                        select: {
                            title: "title",
                            subtitle: "description",
                        },
                    },
                }),
            ],
        }),

        defineField({
            name: "sectorsSubText",
            title: "Sectors Subtext",
            type: "text",
            rows: 5,
            group: "services",
            description:
                "Supporting text displayed within the Sectors drawer.",
        }),

        defineField({
            name: "servicesSectorCollapsibleContent",
            title: "Client Sectors",
            type: "array",
            group: "services",
            description:
                "Expandable industry/sector sections. Drag items to change their display order.",

            of: [
                defineArrayMember({
                    name: "sectorItem",
                    title: "Sector",
                    type: "object",

                    fields: [
                        defineField({
                            name: "title",
                            title: "Sector Name",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),

                        defineField({
                            name: "description",
                            title: "Description",
                            type: "text",
                            rows: 5,
                            validation: (Rule) => Rule.required(),
                        }),
                    ],

                    preview: {
                        select: {
                            title: "title",
                            subtitle: "description",
                        },
                    },
                }),
            ],
        }),

        defineField({
            name: "clientLogos",
            title: "Clients Logos",
            type: "array",
            group: "services",
            description: "Upload client logos to feature.",

            of: [
                defineArrayMember({
                    name: "clientLogo",
                    title: "Client Logo",
                    type: "object",

                    fields: [
                        defineField({
                            name: "image",
                            title: "Logo",
                            type: "image",

                            validation: (Rule) => Rule.required(),
                        }),

                        defineField({
                            name: "text",
                            title: "Client Title",
                            type: "string",
                            description:
                                'Enter client name.',
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

        // =====================================================
        // PODCAST
        // =====================================================

        defineField({
            name: "podcastMainText",
            title: "Podcast Introduction",
            type: "array",
            group: "podcast",
            description:
                "Introductory paragraphs displayed at the top of the Podcast drawer.",

            of: [
                defineArrayMember({
                    type: "text",
                    rows: 4,
                }),
            ],
        }),

        defineField({
            name: "podcastCards",
            title: "Podcast Episodes",
            type: "array",
            group: "podcast",
            description:
                "Podcast episode cards displayed in the drawer. Drag to reorder.",

            of: [
                defineArrayMember({
                    name: "podcastEpisode",
                    title: "Podcast Episode",
                    type: "object",

                    fields: [
                        defineField({
                            name: "date",
                            title: "Date",
                            type: "string",
                            description:
                                'Display date, for example "May 20".',
                            validation: (Rule) => Rule.required(),
                        }),

                        defineField({
                            name: "length",
                            title: "Episode Length",
                            type: "string",
                            description:
                                'For example "33 min".',
                            validation: (Rule) => Rule.required(),
                        }),

                        defineField({
                            name: "description",
                            title: "Episode Title / Description",
                            type: "text",
                            rows: 3,
                            validation: (Rule) => Rule.required(),
                        }),
                    ],

                    preview: {
                        select: {
                            title: "description",
                            date: "date",
                            length: "length",
                        },

                        prepare({title, date, length}) {
                            return {
                                title,
                                subtitle: `${date || ""}${date && length ? " · " : ""}${length || ""}`,
                            };
                        },
                    },
                }),
            ],
        }),

        defineField({
            name: "podcastSubText",
            title: "Podcast Supporting Text",
            type: "text",
            rows: 6,
            group: "podcast",
            description:
                "Additional copy displayed beneath the podcast episodes.",
        }),


        // =====================================================
        // TOOLKIT
        // =====================================================

        defineField({
            name: "toolkitMainText",
            title: "Main Introduction",
            type: "text",
            rows: 6,
            group: "toolkit",
            description:
                "Main introductory text for The Visibility Advantage.",
        }),

        defineField({
            name: "toolkitImages",
            title: "Toolkit Cards",
            type: "array",
            group: "toolkit",
            description:
                "Add, remove, or reorder the toolkits displayed on the website.",

            validation: (Rule) => Rule.min(1),

            of: [
                defineArrayMember({
                    name: "toolkitItem",
                    title: "Toolkit",
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
                                "Image displayed with this toolkit.",
                            validation: (Rule) => Rule.required(),
                        }),

                        defineField({
                            name: "text",
                            title: "Toolkit Description",
                            type: "string",
                            description:
                                'Description displayed under the image.',
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


        // =====================================================
        // CONTACT
        // =====================================================

        defineField({
            name: "contactMainText",
            title: "Contact Message",
            type: "text",
            rows: 4,
            group: "contact",
            description:
                "Primary message displayed at the top of the Contact drawer.",
        }),

        defineField({
            name: "contactAddress",
            title: "Office Address",
            type: "object",
            group: "contact",

            fields: [
                defineField({
                    name: "street",
                    title: "Street Address",
                    type: "string",
                }),

                defineField({
                    name: "cityStateZip",
                    title: "City, State & ZIP",
                    type: "string",
                }),
            ],
        }),

        defineField({
            name: "contactEmail1",
            title: "General Email",
            type: "string",
            group: "contact",

            validation: (Rule) =>
                Rule.email().error("Enter a valid email address."),
        }),

        defineField({
            name: "contactEmail2",
            title: "Careers Email",
            type: "string",
            group: "contact",

            validation: (Rule) =>
                Rule.email().error("Enter a valid email address."),
        }),
    ],

    preview: {
        prepare() {
            return {
                title: "Drawer Content",
                subtitle: "About, Services, Podcast, Toolkit & Contact",
            };
        },
    },
});