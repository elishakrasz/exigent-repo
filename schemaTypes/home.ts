import {defineField, defineType} from 'sanity'


export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
        name: 'body',
        title: 'Body',
        type: 'array',
        of: [{ type: 'block' }]
      }),
    defineField({
      name: 'main',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'team',
      title: 'Team',
      type: 'array',
      of: [{type: 'team'}],
    }),
  ]
})
