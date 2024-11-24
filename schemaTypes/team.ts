import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'team',
  title: 'Team',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'person',
      title: 'Team Member',
      type: 'reference',
      to: [{type: 'person'}],
    }),
    defineField({
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      }),
    defineField({
      name: 'externalId',
      title: 'External ID',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      subtitle: 'Name',
      title: 'person.name',
      media: 'person.image',
    },
  },
})
