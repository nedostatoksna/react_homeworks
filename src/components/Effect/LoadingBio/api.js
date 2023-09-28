const db = {
    Taylor : 'This is a biography of Taylor.',
    Bob : 'This is a biography of Bob.',
    Alice : 'This is a biography of Alice.',
  }
  
  const fetchBio = async function(person) {
    return new Promise((resolve, reject) => (
      setInterval(
          () => {
            if (db[person]) resolve(db[person])
            else reject(new Error("incorrect name!"))
          }, 3000
        )
      )
    )
  }
  
  export { fetchBio , db};