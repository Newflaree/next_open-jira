

export const seedData = {
  entries: [
    {
      description: 'Pendientes: Lorem jaksdfj m j masd ljdk ja j jals',
      status: 'pending',
      createAt: Date.now()
    },
    {
      description: 'En progreso: Lorem jaksdfj m j masd ljdk ja j jals',
      status: 'in-progress',
      createAt: Date.now() - 1000000
    },
    {
      description: 'Terminadas: Lorem jaksdfj m j masd ljdk ja j jals',
      status: 'finished',
      createAt: Date.now() - 100000
    }
  ]
}
