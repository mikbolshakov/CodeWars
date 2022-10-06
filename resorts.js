const resorts = {
  'Hallstatt': new Date('2021-09-01'),
  'Matera': new Date('2024-07-02'),
  'Bled': new Date('2023-05-21'),
  'Kotor': new Date('2024-07-15'),
  'Como': new Date('2020-10-18'),
  'Saint Moritz': new Date('2022-12-10'),
}

function resortsToArray(resorts) {
  return Object.keys(resorts)
  .filter(resort => resorts[resort] > new Date())
  .sort((a,  b) => {
    // console.log(resorts[a] - resorts[b])
    return resorts[a] - resorts[b]
  })
}

console.log(resortsToArray(resorts)) // ['Saint Moritz', 'Bled', 'Matera', 'Kotor']