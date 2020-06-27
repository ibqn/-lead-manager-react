const makeConfig = (getState) => {
  const {
    auth: { token },
  } = getState()

  const config = {
    headers: { 'content-Type': 'application/json' },
  }

  if (token) {
    config.headers['Authorization'] = `Token ${token}`
  }

  return config
}

export { makeConfig }
