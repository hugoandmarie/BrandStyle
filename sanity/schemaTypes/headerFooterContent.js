import {
    defineType,
    defineField,
    defineArrayMember
} from "sanity";

export const headerFooterContent = defineType({
    name: "headerFooterContent",
    title: "Header & Footer Content",
    type: "document",

    description:
        "Manage navigation, social links, address, and footer content.",

    groups: [
        {
            name: "header",
            title: "Header",
            default: true,
        },
        {
            name: "footer",
            title: "Footer",
        },
    ],

    fields: [
        // =====================================================
        // HEADER
        // =====================================================

        defineField({
            name: "headerNavItems",
            title: "Header Navigation",
            type: "array",
            group: "header",
            description:
                "Navigation items displayed in the site header. Drag to reorder.",

            of: [
                defineArrayMember({
                    name: "headerNavItem",
                    title: "Navigation Item",
                    type: "object",

                    fields: [
                        defineField({
                            name: "label",
                            title: "Label",
                            type: "string",
                            description:
                                'Text displayed in the navigation, for example "About".',
                            validation: (Rule) => Rule.required(),
                        }),

                        defineField({
                            name: "drawerTarget",
                            title: "Drawer Target",
                            type: "string",
                            readOnly: false,
                            description: "Internal value used by the website. Do not edit.",
                        }),

                        defineField({
                            name: "showOnMobile",
                            title: "Show on Mobile",
                            type: "boolean",
                            initialValue: true,
                        }),

                        defineField({
                            name: "showOnDesktop",
                            title: "Show on Desktop",
                            type: "boolean",
                            initialValue: true,
                        }),
                    ],

                    preview: {
                        select: {
                            title: "label",
                            subtitle: "drawerTarget",
                        },
                    },
                }),
            ],
        }),

        // =====================================================
        // FOOTER NAVIGATION
        // =====================================================

        defineField({
            name: "footerNavItems",
            title: "Footer Navigation",
            type: "array",
            group: "footer",
            description:
                "Navigation items displayed in the footer. Drag to reorder.",

            of: [
                defineArrayMember({
                    name: "footerNavItem",
                    title: "Footer Navigation Item",
                    type: "object",

                    fields: [
                        defineField({
                            name: "label",
                            title: "Label",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),

                        defineField({
                            name: "drawerTarget",
                            title: "Drawer Target",
                            type: "string",
                            readOnly: false,
                            description: "Internal value used by the website. Do not edit.",
                        }),

                        defineField({
                            name: "type",
                            title: "Link Type",
                            type: "string",
                            options: {
                                list: [
                                    {
                                        title: "Drawer",
                                        value: "drawer",
                                    },
                                    {
                                        title: "Newsletter Signup",
                                        value: "newsletter",
                                    },
                                    {
                                        title: "External Link",
                                        value: "external",
                                    },
                                ],
                                layout: "radio",
                            },
                            initialValue: "drawer",
                            validation: (Rule) => Rule.required(),
                        }),

                        defineField({
                            name: "url",
                            title: "URL",
                            type: "url",
                            description:
                                "Only required if Link Type is External Link.",

                            hidden: ({parent}) =>
                                parent?.type !== "external",
                        }),
                    ],

                    preview: {
                        select: {
                            title: "label",
                            type: "type",
                            target: "drawerTarget",
                        },

                        prepare({title, type, target}) {
                            return {
                                title,
                                subtitle:
                                    type === "drawer"
                                        ? `Drawer: ${target || "Not set"}`
                                        : type === "newsletter"
                                            ? "Newsletter Signup"
                                            : "External Link",
                            };
                        },
                    },
                }),
            ],
        }),

        // =====================================================
        // SOCIAL LINKS
        // =====================================================

        defineField({
            name: "socialLinks",
            title: "Social Links",
            type: "array",
            group: "footer",
            description:
                "Social media links displayed in the footer.",

            of: [
                defineArrayMember({
                    name: "socialLink",
                    title: "Social Link",
                    type: "object",

                    fields: [
                        defineField({
                            name: "label",
                            title: "Label",
                            type: "string",
                            description:
                                'Short display label, for example "IG", "FB", or "LI".',
                            validation: (Rule) => Rule.required(),
                        }),

                        defineField({
                            name: "url",
                            title: "URL",
                            type: "url",
                            validation: (Rule) => Rule.required(),
                        }),
                    ],

                    preview: {
                        select: {
                            title: "label",
                            subtitle: "url",
                        },
                    },
                }),
            ],
        }),

        // =====================================================
        // FOOTER DETAILS
        // =====================================================

        defineField({
            name: "addressText",
            title: "Address",
            type: "string",
            group: "footer",
            description:
                "Address displayed at the bottom of the website.",
        }),

        defineField({
            name: "copyrightText",
            title: "Copyright Text",
            type: "string",
            group: "footer",
            description:
                "Copyright notice.",
            initialValue: "Copyright © 2026 Brandstyle Communications, LLC. All Rights Reserved.",
        }),

        defineField({
            name: "privacyPolicyLabel",
            title: "Privacy Policy Label",
            type: "string",
            group: "footer",
            initialValue: "Privacy Policy",
        }),

        defineField({
            name: "privacyPolicyLink",
            title: "Privacy Policy URL",
            type: "url",
            group: "footer",
        }),
    ],

    preview: {
        prepare() {
            return {
                title: "Header & Footer Content",
                subtitle: "Navigation, social links, address & legal",
            };
        },
    },
});