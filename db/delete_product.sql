delete from shelfie
where id = $1
returning *;