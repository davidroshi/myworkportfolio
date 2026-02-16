export const project = {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Websites', value: 'Websites' },
                    { title: 'Webapps', value: 'Webapps' },
                    { title: 'Automations', value: 'Automations' },
                ],
                layout: 'radio'
            }
        },
        {
            name: 'image',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'tools',
            title: 'Tools Used',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            name: 'link',
            title: 'Project Link',
            type: 'url'
        }
    ],
}
