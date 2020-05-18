export async function fetchData() {
  const res = await fetch(
    'https://api.planningcenteronline.com/groups/v2/groups?per_page=100',
    {
      headers: {
        Authorization:
          'Basic ZTM1NTliNjhhMjVhN2Y5MDk4YTY0ODQ1ZGEzMTNmNWRkNjRhZjY2Yzg2YzIwNTU3MzQ5ZGI5ZGNkMTQ2Njk2NTozNDNmYTgzZTE1OWI5MjJlZjA5MjdjZWM3YzJkZWFmNmIzYzg1NGM5NzZhMGQ5ZjliZjBmZmNhOWZhMDI5MDZk'
      }
    }
  )

  return (
    res
      .json()
      .then(result => result)
      // .then(res => {
      //   fs.writeFile('data.json', JSON.stringify(res, null, 2), 'utf8', function(
      //     err
      //   ) {
      //     if (err) {
      //       console.log(
      //         'Some error occured - file either not saved or corrupted file saved.'
      //       )
      //     } else {
      //       console.log("It's saved!")
      //     }
      //   })
      // })
      .catch(err => ({ success: false, err }))
  )
}
