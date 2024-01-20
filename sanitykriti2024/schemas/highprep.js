export default {
    name: 'highprep',
    type: 'document',
    title: 'High Prep',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'organiser',
        type: 'string',
        title: 'Organiser'
      },
      {
        name: 'pdf',
        type: 'file',
        title: 'PDF'
      }
    ]
}