export default {
    name: 'noprep',
    type: 'document',
    title: 'No Prep',
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
        name: 'people',
        type: 'number',
        title: 'Number of People'
      },
      {
        name: 'pdf',
        type: 'file',
        title: 'PDF'
      }
    ]
}