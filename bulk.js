const payload = {}

payload['users/-LxVbn5zZte-pkcSE52w'] = 'elaine'
payload['messages/-LxVbsUN_epgZ6xVAsAs'] = 'elaine'
payload['messages/-LxVjSbKEA7Tp45atZ7J'] = 'elaine'

database.ref('messages').update(payload)